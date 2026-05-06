def calculate_fake_news_score(
    text,
    sentiment_scores=None
):

    suspicious_words = [

        "shocking",
        "secret",
        "exposed",
        "viral",
        "breaking",
        "leaked",
        "must watch",
        "government hiding"
    ]

    score = 10

    text_lower = text.lower()

    for word in suspicious_words:

        if word in text_lower:

            score += 15

    score = min(score, 100)

    return score