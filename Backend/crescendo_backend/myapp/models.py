from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.URLField(blank=True)

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    text = models.TextField()
    
class ReviewScore(models.Model):
    review = models.OneToOneField(Review, on_delete=models.CASCADE)
    score = models.IntegerField()

class ProductTotalScore(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    total_score = models.FloatField()

class ProductTopic(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    topics = models.TextField()

class ReviewEmotion(models.Model):
    review = models.OneToOneField(Review, on_delete=models.CASCADE)
    emotion1 = models.CharField(max_length=100)
    emotion2 = models.CharField(max_length=100)