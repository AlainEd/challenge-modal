from django.http import JsonResponse
from .models import Fruit
from django.views import View

class FruitView(View):

    def get(self, request):
        fruits = list(Fruit.objects.values())
        if (len(fruits) > 0):
            data = {
                'fruits': fruits
            }
        else:
            data = {
                'message': "Fruits empty",
                'fruits': []
            }

        return JsonResponse(data)