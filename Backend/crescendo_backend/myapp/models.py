from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)

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