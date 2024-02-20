from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.generics import ListAPIView
from .models import Product
from .serializers import ProductSerializer

# Create your views here.

def home(request):
    return JsonResponse({'info': 'Hello, World!'})

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer