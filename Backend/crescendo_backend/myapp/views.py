from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.generics import ListAPIView
from .models import Product, Review
from .serializers import ProductSerializer, ReviewSerializer

# Create your views here.

def home(request):
    return JsonResponse({'info': 'Hello, World!'})

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductReviewListView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        product_id = self.kwargs['product_id']
        return Review.objects.filter(product_id=product_id)