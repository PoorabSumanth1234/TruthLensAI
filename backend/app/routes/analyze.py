from fastapi import APIRouter

from pydantic import BaseModel

router = APIRouter()

# REQUEST MODEL

class NewsRequest(BaseModel):
    text: str

# ANALYZE ROUTE

@router.post("/analyze")
def analyze_news(request: NewsRequest):

    text = request.text

    text_lower = text.lower()

    # SUSPICIOUS WORDS

    suspicious_words = [

        "shocking",

        "secret",

        "unbelievable",

        "government hiding",

        "exposed",

        "breaking",

        "viral",

        "100%",

        "miracle",

        "conspiracy",

        "danger",

        "urgent",

        "must watch",

        "hidden truth"
    ]

    # TRUSTED WORDS

    trusted_words = [

        "research",

        "official",

        "reuters",

        "bbc",

        "study",

        "report",

        "data",

        "government report",

        "analysis",

        "survey",

        "scientists",

        "university"
    ]

    # COUNT WORD MATCHES

    suspicious_count = sum(

        word in text_lower

        for word in suspicious_words
    )

    trusted_count = sum(

        word in text_lower

        for word in trusted_words
    )

    # DYNAMIC CREDIBILITY SCORE

    credibility_score = (
        70 +
        (trusted_count * 8) -
        (suspicious_count * 10)
    )

    credibility_score = max(
        0,
        min(100, credibility_score)
    )

    # DYNAMIC MANIPULATION SCORE

    manipulation_score = (
        20 +
        (suspicious_count * 12)
    )

    manipulation_score = max(
        0,
        min(100, manipulation_score)
    )

    # SENTIMENT

    if suspicious_count > trusted_count:

        sentiment = "Negative"

    elif trusted_count > suspicious_count:

        sentiment = "Positive"

    else:

        sentiment = "Neutral"

    # MISLEADING PARTS

    misleading_parts = []

    for word in suspicious_words:

        if word in text_lower:

            misleading_parts.append(word)

    # SMART TRUSTED SOURCES

    sources = []

    # POLITICS

    if any(word in text_lower for word in [

        "government",

        "minister",

        "election",

        "president",

        "politics",

        "policy"
    ]):

        sources.extend([

            "Reuters",

            "BBC News",

            "Al Jazeera"
        ])

    # HEALTH

    if any(word in text_lower for word in [

        "health",

        "virus",

        "covid",

        "disease",

        "hospital",

        "medicine"
    ]):

        sources.extend([

            "WHO",

            "Mayo Clinic",

            "CDC"
        ])

    # FINANCE

    if any(word in text_lower for word in [

        "stock",

        "market",

        "economy",

        "finance",

        "bank",

        "investment"
    ]):

        sources.extend([

            "Bloomberg",

            "Economic Times",

            "Forbes"
        ])

    # TECHNOLOGY

    if any(word in text_lower for word in [

        "ai",

        "technology",

        "software",

        "cyber",

        "robot",

        "startup"
    ]):

        sources.extend([

            "TechCrunch",

            "Wired",

            "MIT Technology Review"
        ])

    # SCIENCE

    if any(word in text_lower for word in [

        "research",

        "study",

        "scientist",

        "space",

        "physics",

        "experiment"
    ]):

        sources.extend([

            "Nature",

            "ScienceDaily",

            "NASA"
        ])

    # REMOVE DUPLICATES

    sources = list(set(sources))

    # DEFAULT SOURCES

    if len(sources) == 0:

        sources = [

            "Reuters",

            "BBC News"
        ]

    # FINAL RESPONSE

    return {

        "credibility_score": credibility_score,

        "manipulation_score": manipulation_score,

        "sentiment": sentiment,

        "misleading_parts": misleading_parts,

        "sources": sources
    }