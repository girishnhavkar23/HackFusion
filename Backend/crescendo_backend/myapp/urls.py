from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.ProductListView.as_view(), name='products'),
    path('products/<int:product_id>/reviews/', views.ProductReviewListView.as_view(), name='product_reviews'),
    path('products/<int:product_id>/review-sentiment-score/', views.review_sentiment_score, name='review_sentiment_score'),
]