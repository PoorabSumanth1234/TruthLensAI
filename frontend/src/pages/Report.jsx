import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

import debounce from "lodash/debounce";

import ChatbotSidebar from "../components/ChatBotBar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Report() {

  const location = useLocation();

  const navigate = useNavigate();

  // INITIAL DATA

  const analysis =
    location.state?.analysis || {};

  const originalText =
    location.state?.originalText || "";

  // LIVE STATES

  const [editableText, setEditableText] =
    useState(originalText);

  const [liveAnalysis, setLiveAnalysis] =
    useState(analysis);

  const [loading, setLoading] =
    useState(false);

  // LIVE ANALYSIS

  const runLiveAnalysis = debounce(

    async (value) => {

      try {

        setLoading(true);

        const response = await axios.post(
          "http://127.0.0.1:8000/analyze",
          {
            text: value
          }
        );

        setLiveAnalysis(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }

    },

    1000
  );

  // AUTO ANALYZE

  useEffect(() => {

    if (editableText.trim()) {

      runLiveAnalysis(editableText);
    }

  }, [editableText]);

  // SAFE VALUES

  const credibility =
    liveAnalysis?.credibility_score ?? 0;

  const manipulation =
    liveAnalysis?.manipulation_score ?? 0;

  const sentiment =
    liveAnalysis?.sentiment ?? "Neutral";

  const sources =
    liveAnalysis?.sources ?? [];

  const verdict =
    credibility > 60
      ? "Likely Genuine"
      : "Possibly Misleading";

  // GRAPH DATA

  const chartData = [

    {
      name: "Credibility",
      value: credibility
    },

    {
      name: "Manipulation",
      value: manipulation
    }

  ];

  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">
          TruthLens AI Report
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
        >
          Back
        </button>

      </div>

      {/* LOADING */}

      {

        loading && (

          <div className="mb-6 flex items-center gap-3 text-yellow-400">

            <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

            <span>Updating AI Analysis...</span>

          </div>

        )

      }

      {/* EDITABLE NEWS */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 mb-10">

        <h2 className="text-2xl font-bold mb-5">
          Editable News Content
        </h2>

        <textarea
          value={editableText}
          onChange={(e) =>
            setEditableText(e.target.value)
          }
          className="w-full h-56 bg-[#181818] border border-gray-700 rounded-xl p-5 resize-none outline-none focus:border-red-500"
        />

      </div>

      {/* VERDICT */}

      <div className="bg-gradient-to-r from-red-900 to-orange-800 rounded-2xl p-8 mb-10">

        <h1 className="text-5xl font-bold mb-4">
          {verdict}
        </h1>

        <p className="text-2xl">
          Verification Confidence:
          {" "}
          <span className="font-bold">
            {credibility}%
          </span>
        </p>

      </div>

      {/* METRICS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CREDIBILITY */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)]">

          <h2 className="text-gray-400 text-xl mb-3">
            Credibility
          </h2>

          <p
            className={`text-6xl font-bold ${
              credibility > 70
                ? "text-green-400"
                : credibility > 40
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {credibility}%
          </p>

        </div>

        {/* MANIPULATION */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)]">

          <h2 className="text-gray-400 text-xl mb-3">
            Manipulation
          </h2>

          <p
            className={`text-6xl font-bold ${
              manipulation > 70
                ? "text-red-500"
                : manipulation > 40
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {manipulation}%
          </p>

        </div>

        {/* SENTIMENT */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.15)]">

          <h2 className="text-gray-400 text-xl mb-3">
            Sentiment
          </h2>

          <p className="text-4xl font-bold text-yellow-400">
            {sentiment}
          </p>

        </div>

      </div>

      {/* GRAPH */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          AI Metrics Visualization
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={chartData}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#ef4444"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* SOURCES */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-5">
          Trusted Sources
        </h2>

        {

          sources.length > 0 ? (

            sources.map((source, index) => (

              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-4 mb-4"
              >

                {source}

              </div>

            ))

          ) : (

            <p className="text-gray-400">
              No trusted sources found
            </p>

          )

        }

      </div>

      {/* CHATBOT */}

      <ChatbotSidebar analysisData={liveAnalysis} />

    </div>
  );
}

export default Report;