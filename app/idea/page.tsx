"use client";
import { useState } from "react";

export default function IdeaPage() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    const res = await fetch("/api/generate-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea }),
    });

    const data = await res.json();
    setResult(data.result);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">

      <h1 className="text-4xl font-bold mb-6">
        Enter Your Startup Idea
      </h1>

      <input
        type="text"
        placeholder="Example: AI study planner"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        className="border p-3 rounded-lg w-80"
      />

      <button
        onClick={handleGenerate}
        className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Generating..." : "Generate Brand"}
      </button>

      {result && (
        <div className="mt-8 p-6 border rounded-xl shadow-md w-96 bg-white">
          <h2 className="text-xl font-semibold mb-2">
            Generated Brand
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {result}
          </p>
        </div>
      )}

    </div>
  );
}