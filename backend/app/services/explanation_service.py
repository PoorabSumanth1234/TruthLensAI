def generate_explanation(manipulation_score, emotion):

    explanations = []

    if manipulation_score > 60:
        explanations.append(
            "This content contains highly manipulative language."
        )

    elif manipulation_score > 30:
        explanations.append(
            "This content uses emotionally persuasive wording."
        )

    if emotion == "Negative":
        explanations.append(
            "The overall tone appears emotionally negative."
        )

    if not explanations:
        explanations.append(
            "The content appears relatively neutral."
        )

    return explanations