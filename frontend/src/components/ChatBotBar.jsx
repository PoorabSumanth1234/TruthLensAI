import { useState } from "react";

function ChatbotSidebar({ analysisData }) {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I am TruthLens AI Assistant."
    }
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  // AI RESPONSE FUNCTION

  const generateReply = (message) => {

    const lower = message.toLowerCase();

    // SOURCES

    if (
      lower.includes("source") ||
      lower.includes("sources") ||
      lower.includes("reference")
    ) {

      if (analysisData?.sources?.length > 0) {

        return `Trusted sources found:\n\n${analysisData.sources.join("\n")}`;
      }

      return "No trusted sources were found for this article.";
    }

    // CREDIBILITY

    if (lower.includes("credibility")) {

      return `Credibility score is ${
        analysisData?.credibility_score || 0
      }% based on AI analysis and trusted news patterns.`;
    }

    // MANIPULATION

    if (
      lower.includes("manipulation") ||
      lower.includes("biased")
    ) {

      return `Manipulation score is ${
        analysisData?.manipulation_score || 0
      }%. Emotional or sensational wording increases this score.`;
    }

    // FAKE / REAL

    if (
      lower.includes("fake") ||
      lower.includes("real") ||
      lower.includes("genuine")
    ) {

      if (
        (analysisData?.credibility_score || 0) > 60
      ) {

        return "This article appears relatively genuine based on current AI analysis.";
      }

      return "This article may contain misleading or suspicious information.";
    }

    // SENTIMENT

    if (
      lower.includes("emotion") ||
      lower.includes("sentiment")
    ) {

      return `Detected sentiment: ${
        analysisData?.sentiment || "Neutral"
      }`;
    }

    return "Ask about credibility, manipulation, sentiment, or trusted sources.";
  };

  // SEND MESSAGE

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    const currentInput = input;

    setInput("");

    setTyping(true);

    setTimeout(() => {

      const aiMessage = {
        role: "ai",
        text: generateReply(currentInput)
      };

      setMessages((prev) => [
        ...prev,
        aiMessage
      ]);

      setTyping(false);

    }, 1000);
  };

  return (

    <>

      {/* FLOATING BUTTON */}

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-2xl text-3xl z-50"
      >
        🤖
      </button>

      {/* SIDEBAR */}

      {

        isOpen && (

          <div className="fixed right-0 top-0 h-screen w-96 bg-[#0f0f0f] border-l border-gray-800 flex flex-col text-white z-50 shadow-2xl">

            {/* HEADER */}

            <div className="p-5 border-b border-gray-800 flex justify-between items-center">

              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                AI Assistant
              </h1>

              {/* CLOSE BUTTON */}

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl hover:text-red-400"
              >
                ✕
              </button>

            </div>

            {/* CHAT AREA */}

            <div className="flex-1 overflow-y-auto p-5 space-y-5">

              {

                messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`max-w-[85%] p-4 rounded-2xl whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-red-500 ml-auto"
                        : "bg-[#1a1a1a]"
                    }`}
                  >

                    {msg.text}

                  </div>

                ))

              }

              {

                typing && (

                  <div className="bg-[#1a1a1a] p-4 rounded-2xl w-fit">

                    <div className="flex gap-2">

                      <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>

                      <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>

                      <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>

                    </div>

                  </div>

                )

              }

            </div>

            {/* INPUT */}

            <div className="p-4 border-t border-gray-800 flex gap-3">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    handleSend();
                  }
                }}
                placeholder="Ask AI..."
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-red-500 to-orange-500 px-5 rounded-xl"
              >
                Send
              </button>

            </div>

          </div>

        )

      }

    </>
  );
}

export default ChatbotSidebar;