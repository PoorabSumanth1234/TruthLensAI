from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Get Mongo URI from .env
MONGO_URI = os.getenv("MONGO_URI")

print("Mongo URI Loaded:", MONGO_URI)

# Connect to MongoDB Atlas
client = MongoClient(MONGO_URI)

# Database
db = client["truthlens"]

# Collection
analysis_collection = db["analysis"]