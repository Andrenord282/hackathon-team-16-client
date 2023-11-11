from rest_framework import serializers
from .models import GameStats, Player, MemoryCard, Game

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'username')

class MemoryCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemoryCard
        fields = ('name', 'image', 'content')

class GameSerializer(serializers.ModelSerializer):
    memorycards = MemoryCardSerializer(many=True, read_only=True)

    class Meta:
        model = Game
        fields = ('memorycards',)


class GameStatsSerializer(serializers.ModelSerializer):
    player = serializers.StringRelatedField()
    game = serializers.StringRelatedField()

    class Meta:
        model = GameStats
        fields = ('id', 'player', 'game', 'time_taken', 'moves_taken')
