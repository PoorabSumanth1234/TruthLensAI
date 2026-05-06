def detect_manipulation(text):

    suspicious_phrases = [

        "shocking",
        "secret",
        "must watch",
        "government hiding",
        "viral",
        "breaking",
        "exposed",
        "leaked",
        "dangerous truth",
        "media won't show",
        "wake up",
        "100% proof"
    ]

    text_lower = text.lower()

    detected = []

    score = 0

    for phrase in suspicious_phrases:

        if phrase in text_lower:

            detected.append(phrase)

            score += 12

    score = min(score, 100)

    return {

        "score": score,

        "phrases": detected
    }