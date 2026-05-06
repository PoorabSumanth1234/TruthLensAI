import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // CHECK LOGIN STATUS
  const isLoggedIn = localStorage.getItem("token");

  // ANALYZE FUNCTION
  const analyzeNews = async () => {

    if (!text.trim()) return;

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        { text }
      );

      navigate("/report", {

        state: {

          analysis: response.data,
          originalText: text,
        },
      });

    } catch (error) {

      console.log(error);
      alert("Analysis Failed");

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

  return (

    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          TruthLens AI
        </h1>

        <div className="flex gap-4">

          {!isLoggedIn ? (

            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 rounded-xl border border-gray-700 hover:bg-gray-900 transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition"
              >
                Register
              </button>
            </>

          ) : (

            <button
              onClick={() => {

                localStorage.removeItem("token");
                navigate("/");
              }}
              className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition"
            >
              Logout
            </button>

          )}

        </div>

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

          Analyze credibility, emotional manipulation,
          trusted sources and live verification instantly.

        </p>

        {/* MAIN ANALYSIS BOX */}

        <div className="w-full max-w-5xl mt-14 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 shadow-2xl">

          {/* TEXTAREA */}

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!isLoggedIn}
            placeholder={
              isLoggedIn
                ? "Paste news article, headline or claim here..."
                : "Login to analyze news using AI"
            }
            className={`w-full h-72 bg-[#161616] border border-gray-700 rounded-2xl p-6 text-lg outline-none resize-none transition
            ${
              !isLoggedIn
                ? "opacity-50 cursor-not-allowed blur-[1px]"
                : "focus:border-red-500"
            }`}
          />

          {/* BUTTON */}

          <div className="flex justify-end mt-6">

            {!isLoggedIn ? (

              <button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                Login to Continue
              </button>

            ) : (

              <button
                onClick={analyzeNews}
                disabled={loading}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                {loading ? "Analyzing..." : "Analyze News"}
              </button>

            )}

          </div>

        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">

          <div className="bg-[#101010] border border-gray-800 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-3">
              Credibility Analysis
            </h3>

            <p className="text-gray-400">
              AI checks whether the content aligns with trusted reports.
            </p>

          </div>

          <div className="bg-[#101010] border border-gray-800 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-3">
              Manipulation Detection
            </h3>

            <p className="text-gray-400">
              Detects emotionally charged and misleading wording.
            </p>

          </div>

          <div className="bg-[#101010] border border-gray-800 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-3">
              Live Verification
            </h3>

            <p className="text-gray-400">
              Retrieves matching articles from trusted sources.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}