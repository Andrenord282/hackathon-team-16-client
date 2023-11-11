from django.urls import include, path
from .views import GameStatsViewSet, PlayerViewSet, MemoryCardViewSet, GameViewSet
from rest_framework import routers

app_name = 'api'
router_v1 = routers.DefaultRouter()

router_v1.register('players', PlayerViewSet, basename='player')
router_v1.register('memorycards', MemoryCardViewSet, basename='memorycard')
router_v1.register('games', GameViewSet, basename='game')
router_v1.register('gamestats', GameStatsViewSet, basename='gamestats')

urlpatterns = [
    path('', include(router_v1.urls)),
]