from app.services.semantic_similarity_service import calculate_semantic_similarity

def verify_claim(user_text, articles):

    highest_match = 0

    matched_articles = []

    for article in articles:
        similarity_percent = calculate_semantic_similarity(
    user_text,
    article["title"]
)

        article["similarity"] = similarity_percent

        matched_articles.append(article)

        if similarity_percent > highest_match:
            highest_match = similarity_percent

    if highest_match > 70:

        verdict = "Likely Reliable"

    elif highest_match > 40:

        verdict = "Partially Verified"

    else:

        verdict = "Possibly Misleading"

    return {
        "verdict": verdict,
        "confidence": highest_match,
        "matched_articles": matched_articles
    }