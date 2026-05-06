import requests
import os

from dotenv import load_dotenv
from app.config import GNEWS_API_KEY

load_dotenv()

API_KEY = os.getenv("GNEWS_API_KEY")

def fetch_related_news(query):

    url = (
        f"https://gnews.io/api/v4/search?"
        f"q={query}"
        f"&lang=en"
        f"&max=5"
        f"&apikey={GNEWS_API_KEY}"
    )

    response = requests.get(url)

    data = response.json()

    articles = []

    if "articles" in data:

        for article in data["articles"]:

            articles.append({

                "title":
                article.get("title"),

                "description":
                article.get("description"),

                "url":
                article.get("url"),

                "source":
                article.get("source", {}).get("name")
            })

    return articles