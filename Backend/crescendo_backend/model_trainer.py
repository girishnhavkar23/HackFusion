import json
from bertopic import BERTopic

with open('oral_review_dataset.json', 'r') as f:
    data = json.load(f)

# Initialize an empty set to hold the converted data
converted_data = list()

# Iterate over the items in the parsed_data dictionary
for values in data.values():
    # Iterate over the values in the current array
    for value in values:
        # Convert the value to a string and add it to converted_data
        converted_data.append(str(value))

# Now converted_data is a set of strings
print(converted_data)  # Output: {'a', 'b', 'c', 'd', 'e', 'f'}
print(len(converted_data))  # Output: 6

topic_model = BERTopic(verbose=True, embedding_model="all-MiniLM-L6-v2")

topics, _ = topic_model.fit_transform(converted_data)

print(topic_model.get_topic_freq())
print(topic_model.get_topic_info())
print(topics)
print(topic_model.get_topic(0))

topic_model.save("BERTopic_Model_New")