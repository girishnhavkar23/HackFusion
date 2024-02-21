from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import torch

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
    
class EmotionAnalyzer:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("SamLowe/roberta-base-go_emotions")
        self.model = AutoModelForSequenceClassification.from_pretrained("SamLowe/roberta-base-go_emotions")
        self.classifier = pipeline(task="text-classification", model="SamLowe/roberta-base-go_emotions", top_k=None)

    def get_emotion(self, review_list): #Takes a list of reviews as input. Outputs combined emotion of the document.

        model_outputs = self.classifier(review_list)
        return model_outputs[0] # produces a list of dicts for each of the labels
    
# emotion_analyzer = EmotionAnalyzer()
# result = emotion_analyzer.get_emotion(["The brush is very effective in cleaning, I feel the teeth are more clean than manual brushing. the overall spending on brushing might shoot up, but it will average by reducing future dental visits. I normally go to dental cleanup once a year, but I feel with this addition I can go to dental cleanup once every 2 years, the sensitive mode (2nd mode) fits me and in this, you can even clean/massage your gums. The timer feature is cool and it makes me pay attention to cleaning. sometimes when I am still sleepy, my mind wavers and I might miss a spot, this can be avoided. And I have bought extra heads and now me and my wife use our heads by interchanging whenever we use them. There is no lock or click for head attachment so there wont be any wear and tear worry while interchanging heads."])
# print(result)
# print(list(result[0].values())[0], list(result[1].values())[0])
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





