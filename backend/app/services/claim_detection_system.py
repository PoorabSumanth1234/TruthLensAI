def is_valid_claim(text):

    text = text.strip()

    # Too short
    if len(text.split()) < 5:

        return {
            "is_claim": False,
            "reason":
            "Input is too short to analyze."
        }

    # No punctuation or structure
    if (
        "." not in text
        and "!" not in text
        and "?" not in text
    ):

        return {
            "is_claim": False,
            "reason":
            "Input does not resemble a factual claim."
        }

    return {
        "is_claim": True,
        "reason": None
    }