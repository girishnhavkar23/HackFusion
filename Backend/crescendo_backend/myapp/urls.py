from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('products/', views.ProductListView.as_view(), name='products'),
    path('products/<int:product_id>/reviews/', views.ProductReviewListView.as_view(), name='product_reviews'),
]