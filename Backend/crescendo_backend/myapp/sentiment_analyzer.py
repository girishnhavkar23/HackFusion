from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

from .models import Review, Product

class SentimentAnalyzer:

    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
        self.model = AutoModelForSequenceClassification.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")

    def get_rating(self, review):
        token = self.tokenizer.encode(review, return_tensors="pt")
        result = self.model(token)
        return int(torch.argmax(result.logits) + 1)
    
    def get_average_rating(self, reviews):
        total = 0
        for review in reviews:
            token = self.tokenizer.encode(review, return_tensors="pt")
            result = self.model(token)
            total += int(torch.argmax(result.logits) + 1)
        return total / len(reviews)
    
# import bertopic

# class TopicModeler:
    
#         def __init__(self):
#             self.model = bertopic.BERTopic(verbose=True, embedding_model="all-MiniLM-L6-v2")
    
#         def train_model(self):

#             # For each product, get its reviews and store them in a dictionary

#             reviews = Review.objects.filter()
#             reviews_doc = [review.text for review in reviews]
#             print("Initializing Model...")
#             # modeler = TopicModeler()
#             # modeler.train_model(reviews_doc)
#             #modeler.load_model()
#             #print("Model Trained")
#             self.model.fit(reviews_doc)
#             print("Model loaded")
#             self.model.save("BERTopic_Model")

#         def load_model(self):
#             self.model.load("BERTopic_Model")

# Get all Product objects
# products = Product.objects.all()

# # For each product, get its reviews and store them in a dictionary

# reviews = Review.objects.filter()
# reviews_doc = [review.text for review in reviews]
# print("Initializing Model...")
# modeler = TopicModeler()
# modeler.train_model()
# #modeler.load_model()
# #print("Model Trained")
# print("Model loaded")
# print("Initializing Model...")
# sentiment_analyzer = SentimentAnalyzer()
#print("Get Rating:", sentiment_analyzer.get_rating())





