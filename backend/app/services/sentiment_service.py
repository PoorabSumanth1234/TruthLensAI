from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(text):

    scores = analyzer.polarity_scores(text)

    compound = scores['compound']

    if compound >= 0.05:
        emotion = "Positive"

    elif compound <= -0.05:
        emotion = "Negative"

    else:
        emotion = "Neutral"

    return {
        "emotion": emotion,
        "sentiment_scores": scores
    }