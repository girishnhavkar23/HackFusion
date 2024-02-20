from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.generics import ListAPIView
from .models import Product, Review, ReviewScore, ProductTotalScore
from .serializers import ProductSerializer, ReviewSerializer
from .sentiment_analyzer import SentimentAnalyzer
from django.http import JsonResponse

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, authenticate, login


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

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductReviewListView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        product_id = self.kwargs['product_id']
        return Review.objects.filter(product_id=product_id)
    
# Create your views here.
def index(request):
    print(request.user)
    if request.user.is_anonymous:
        return redirect("/login") 
    return render(request, 'index.html')

def loginUser(request):
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)

        # check if user has entered correct credentials
        user = authenticate(username=username, password=password)

        if user is not None:
            # A backend authenticated the credentials
            login(request, user)
            return redirect("/")

        else:
            # No backend authenticated the credentials
            return render(request, 'login.html')

    return render(request, 'login.html')

def logoutUser(request):
    logout(request)
    return redirect("/login")
