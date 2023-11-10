from django.urls import include, path
from .views import ItemViewset
from rest_framework import routers

app_name = 'api'
router_v1 = routers.DefaultRouter()

router_v1.register('items', ItemViewset, basename='items')

urlpatterns = [
    path('', include(router_v1.urls)),
]
