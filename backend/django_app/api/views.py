from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from rest_framework.permissions import AllowAny


class ItemViewset(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]
