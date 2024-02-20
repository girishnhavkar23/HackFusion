from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

class SentimentAnalyzer:

    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
        self.model = AutoModelForSequenceClassification.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")

    def get_rating(self):
        token = self.tokenizer.encode("I love this product", return_tensors="pt")
        result = self.model(token)
        return int(torch.argmax(result.logits) + 1)
    
    def get_average_rating(self, reviews):
        total = 0
        for review in reviews:
            token = self.tokenizer.encode(review, return_tensors="pt")
            result = self.model(token)
            total += int(torch.argmax(result.logits) + 1)
        return total / len(reviews)

print("Initializing Model...")
sentiment_analyzer = SentimentAnalyzer()
print("Get Rating:", sentiment_analyzer.getRating())

