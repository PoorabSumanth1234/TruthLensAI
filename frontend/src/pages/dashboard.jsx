import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [newsText, setNewsText] = useState("");

  const [loading, setLoading] = useState(false);

  // AUTH PROTECTION

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {

      navigate("/login");
    }

  }, []);

  // ANALYZE FUNCTION

  const analyzeNews = async () => {

    if (!newsText.trim()) {

      alert("Please enter news");

      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          text: newsText
        }
      );

      navigate("/report", {

        state: {

          analysis: response.data,

          originalText: newsText
        }
      });

    } catch (error) {

      console.log(error);

      alert("Backend Error");

    } finally {

      setLoading(false);
    }
  };

  // SHIFT + ENTER

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && e.shiftKey) {

      e.preventDefault();

      analyzeNews();
    }
  };

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">

          TruthLens AI

        </h1>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl transition"
        >

          Logout

        </button>

      </nav>

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center px-6 py-20">

        <h1 className="text-6xl font-bold text-center leading-tight max-w-4xl">

          Detect Fake News with

          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            {" "}AI Precision
          </span>

        </h1>

        <p className="text-gray-400 text-center text-xl mt-6 max-w-2xl">

          Analyze credibility, manipulation,
          emotional tone and trusted sources instantly.

        </p>

        {/* ANALYSIS BOX */}

        <div className="w-full max-w-5xl mt-14 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 shadow-2xl">

          {/* TEXTAREA */}

          <textarea
            value={newsText}
            onChange={(e) =>
              setNewsText(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Paste news article or claim here..."
            className="w-full h-72 bg-[#161616] border border-gray-700 rounded-2xl p-6 text-lg outline-none resize-none focus:border-red-500 transition"
          />

          {/* BUTTON */}

          <div className="flex justify-end mt-6">

            <button
              onClick={analyzeNews}
              disabled={loading}
              className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition"
            >

              {

                loading ? (

                  <div className="flex items-center gap-3">

                    {/* SPINNER */}

                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                    <span>Analyzing...</span>

                  </div>

                ) : (

                  "Analyze News"

                )

              }

            </button>

          </div>

        </div>

        {/* FEATURE CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">

          {/* CARD 1 */}

          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:scale-[1.02] transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-3">
              Credibility Analysis
            </h3>

            <p className="text-gray-400">
              AI checks reliability using trusted news sources.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:scale-[1.02] transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-3">
              Manipulation Detection
            </h3>

            <p className="text-gray-400">
              Detects sensational and emotional manipulation.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:scale-[1.02] transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-3">
              Live Verification
            </h3>

            <p className="text-gray-400">
              Matches articles with trusted websites instantly.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;