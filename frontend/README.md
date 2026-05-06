# TruthLens AI

TruthLens AI is an AI-powered fake news detection and credibility analysis platform built using React and FastAPI.

The system analyzes news articles and generates:
- Credibility scores
- Manipulation detection
- Sentiment analysis
- Trusted source suggestions
- AI-powered report visualization

Users can interactively edit news content and observe real-time changes in credibility and manipulation metrics.

---

# Features

## Authentication
- User Registration
- User Login
- Protected Dashboard
- Logout Functionality

## AI Analysis
- Dynamic Credibility Scoring
- Manipulation Detection
- Sentiment Analysis
- Misleading Keyword Detection
- Context-Based Trusted Source Mapping

## Interactive Dashboard
- Editable News Analysis
- Real-Time Metric Updates
- AI Chatbot Assistant
- Data Visualization Graphs
- Responsive UI

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Recharts

## Backend
- FastAPI
- Python
- NLP-inspired Heuristic Analysis

---

# Project Structure


TruthLensAI/
│
├── frontend/
│
├── backend/
│
└── README.md

---

# Installation

## Clone Repository

```bash
git clone https://github.com/vpoorabsumanth04/TruthLensAI.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# API Endpoint

## Analyze News

### POST `/analyze`

Example Request:

```json
{
  "text": "Scientists develop new AI technology for healthcare"
}
```

Example Response:

```json
{
  "credibility_score": 86,
  "manipulation_score": 20,
  "sentiment": "Positive",
  "sources": [
    "TechCrunch",
    "MIT Technology Review"
  ]
}
```

---

# Future Improvements

- Real NLP models
- Transformer-based fake news detection
- JWT Authentication
- Database integration
- Live news verification APIs
- Multi-language support

---

# Author

Poorab Sumanth 
AI/ML and Full Stack Development Enthusiast