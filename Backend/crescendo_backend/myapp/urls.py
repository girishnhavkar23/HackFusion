from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('products/', views.ProductListView.as_view(), name='products'),
]