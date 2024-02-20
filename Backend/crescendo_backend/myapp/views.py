import json
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.generics import ListAPIView
from .models import Product, Review, ReviewScore, ProductTotalScore
from .serializers import ProductSerializer, ReviewSerializer
from .sentiment_analyzer import SentimentAnalyzer
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def home(request):
    return JsonResponse({'info': 'Hello, World!'})

@api_view(['GET'])
def review_sentiment_score(request, product_id):
    review_scores = []
    sentiment_analyzer = SentimentAnalyzer()
    avgScore = 0
    for review in Review.objects.filter(product_id=product_id):
        score = sentiment_analyzer.get_rating(review.text)
        review_scores.append({
            'review': review.text,
            'score': score
        })
        avgScore += score
    avgScore = avgScore / len(review_scores)
    try:
        product_total_score = ProductTotalScore.objects.get(product_id=product_id)
        product_total_score.total_score = avgScore
        product_total_score.save()
    except ProductTotalScore.DoesNotExist:
        ProductTotalScore.objects.create(product_id=product_id, total_score=avgScore)
    return Response({'review_scores': review_scores, 'avgScore': avgScore}) #Returns review score pair!

# @api_view(['GET'])
# def get_product_topics(request):
#     modeler = TopicModeler()
#     reviews = Review.objects.filter()
#     reviews_doc = [review.text for review in reviews]
#     topics = modeler.model.fit_transform(reviews_doc)
    

#     products = Product.objects.all()

# # For each product, get its reviews and calculate topics using the trained model
#     product_topics = {}
#     for product in products:
#         reviews = Review.objects.filter(product=product)

#         review_texts = [review.text for review in reviews]

#         topics, _ = modeler.model.fit_transform(review_texts)

#         product_topics.append({
#             'product_id': product.id,
#             'topics': topics
#         })
        
#     return Response({'topics': product_topics})

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductReviewListView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        product_id = self.kwargs['product_id']
        return Review.objects.filter(product_id=product_id)
    
#Login/Logout
    
from django.contrib.auth.models import User
from rest_framework import status

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        try:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return JsonResponse({'info': 'User created!'}, status=status.HTTP_201_CREATED)
        except:
            return JsonResponse({'info': 'User already exists!'}, status=status.HTTP_409_CONFLICT)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                return JsonResponse({'info': 'Login successful!'}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'info': 'Incorrect credentials!'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return JsonResponse({'info': 'User does not exist!'}, status=status.HTTP_404_NOT_FOUND)

