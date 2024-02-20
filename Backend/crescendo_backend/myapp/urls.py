from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.ProductListView.as_view(), name='products'),
    # path('products/topics/', views.get_product_topics, name='get_product_topics'),
    path('products/<int:product_id>/reviews/', views.ProductReviewListView.as_view(), name='product_reviews'),
    path('products/<int:product_id>/review-sentiment-score/', views.review_sentiment_score, name='review_sentiment_score'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup')
]