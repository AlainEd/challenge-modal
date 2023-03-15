from django.urls import path
from .views import FruitView

urlpatterns = [
    path('fruits/', FruitView.as_view(), name='fruits_list'),
]