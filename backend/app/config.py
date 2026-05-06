from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

GNEWS_API_KEY = os.getenv("GNEWS_API_KEY")

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

