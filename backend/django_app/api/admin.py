from django.contrib import admin
from .models import Player, MemoryCard, Game, GameStats


admin.site.register(Game)
admin.site.register(MemoryCard)
admin.site.register(Player)
admin.site.register(GameStats)