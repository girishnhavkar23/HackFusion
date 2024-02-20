from django.contrib import admin
from .models import Product, Review, ReviewScore, ProductTotalScore

# Register your models here.
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(ReviewScore)
admin.site.register(ProductTotalScore)