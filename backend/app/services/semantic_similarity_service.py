from sentence_transformers import SentenceTransformer
from sentence_transformers.util import cos_sim

model = SentenceTransformer(
    'sentence-transformers/all-MiniLM-L6-v2'
)

def calculate_semantic_similarity(
    user_text,
    article_title
):

    embeddings = model.encode(
        [user_text, article_title]
    )

    similarity = cos_sim(
        embeddings[0],
        embeddings[1]
    ).item()

    similarity_percent = round(
        similarity * 100,
        2
    )

    return similarity_percent