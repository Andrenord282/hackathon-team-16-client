from random import sample
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import GameStats, Player, MemoryCard, Game
from .serializers import GameStatsSerializer, PlayerSerializer, MemoryCardSerializer, GameSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from django.utils import timezone
from django.utils.dateparse import parse_duration
from django.db.models import Avg


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = [AllowAny]


class MemoryCardViewSet(viewsets.ModelViewSet):
    queryset = MemoryCard.objects.all()
    serializer_class = MemoryCardSerializer
    permission_classes = [AllowAny]


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    permission_classes = [AllowAny]

    @action(detail=True, methods=['get'])
    def get_cards(self, request, pk=None):
        game = self.get_object()
        cards = MemoryCard.objects.filter(game=game)

        serializer = MemoryCardSerializer(cards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        player_username = request.data.get('player')
        cards_quantity = request.data.get('cards_quantity')
        player, created = Player.objects.get_or_create(username=player_username)
        
        all_memory_cards = MemoryCard.objects.all()

        if len(all_memory_cards) < 2 * cards_quantity:
            return Response({'ошибка': 'Не достаточно карт для игры.'}, status=status.HTTP_400_BAD_REQUEST)

        game = Game.objects.create(player=player, cards_quantity=cards_quantity)

        selected_memory_cards = sample(list(all_memory_cards), cards_quantity)

        for card in selected_memory_cards:
            pair_card = MemoryCard.objects.filter(name=card.name).exclude(id=card.id).first()
            game.memorycards.add(card, pair_card)

        serializer = GameSerializer(game)

        GameStats.objects.create(player=player, game=game, time_taken=timezone.timedelta(), moves_taken=0)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'])
    def end_game(self, request, pk=None):
        game = self.get_object()
        time_taken_str = request.data.get('time_taken')
        moves_taken = request.data.get('moves_taken')

        try:
            game_stats = GameStats.objects.get(game=game)
        except GameStats.DoesNotExist:
            game_stats = GameStats.objects.create(player=game.player, game=game, time_taken=timezone.timedelta(), moves_taken=0)

        if time_taken_str is not None and not game_stats.time_taken:

            time_taken = parse_duration(time_taken_str)
            game_stats.time_taken = time_taken
            game_stats.moves_taken = moves_taken
            game_stats.save()

            serializer = GameStatsSerializer(game_stats)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Игра уже завершена.'}, status=status.HTTP_400_BAD_REQUEST)


class GameStatsViewSet(viewsets.ModelViewSet):
    queryset = GameStats.objects.all()
    serializer_class = GameStatsSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['get'])
    def top_players(self, request):
        top_players = (
            GameStats.objects.values('player')
            .annotate(avg_time=Avg('time_taken'))
            .order_by('avg_time')
        )[:10]
        top_players_data = [
            {
                'player': player['player'],
                'avg_time': str(player['avg_time']),
            }
            for player in top_players
        ]

        return Response(top_players_data, status=status.HTTP_200_OK)
