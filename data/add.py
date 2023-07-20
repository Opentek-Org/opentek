import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate(r"C:\Users\ANIRUDH PANDA\Downloads\opentek-serviceKey.json")
firebase_admin.initialize_app(cred)

# Create a Firestore client
db = firestore.client()

# Read data from projects.json file
with open(r"C:\Users\ANIRUDH PANDA\OneDrive\Desktop\opentek\data\projects.json", encoding='utf-8') as json_file:
    data = json.load(json_file)

# Add data to Firestore collection
for item in data:
    doc_ref = db.collection('projects').document()
    doc_ref.set(item)

print("Data added to Firestore successfully!")
