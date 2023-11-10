from django.shortcuts import render

from .models import Player

def index(request):
    players = Player.objects.all()
    return render(request, 'index.html', {'players': players})
