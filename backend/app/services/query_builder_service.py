STOPWORDS = {

    "is",
    "the",
    "a",
    "an",
    "of",
    "in",
    "on",
    "at",
    "to",
    "for",
    "and",
    "or",
    "with"
}

def build_search_query(text):

    # Take first sentence
    first_sentence = text.split(".")[0]

    words = first_sentence.split()

    filtered_words = [

        word

        for word in words

        if word.lower() not in STOPWORDS
    ]

    # Keep only important words
    filtered_words = filtered_words[:10]

    query = " ".join(filtered_words)

    return query