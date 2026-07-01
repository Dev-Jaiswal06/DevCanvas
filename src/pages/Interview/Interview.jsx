import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import interviewQuestions, { getAllQuestions } from "../../data/interview";
import QuestionCard from "../../features/interview/components/QuestionCard";
import MockInterview from "../../features/interview/components/MockInterview";
import SlideUp from "../../features/animations/SlideUp";

const topicIcons = {
  html: "🌐",
  css: "🎨",
  javascript: "⚡",
  react: "⚛️",
};

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function InterviewPage() {
  const [topic, setTopic] = useState(null);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [mode, setMode] = useState("browse");
  const [bookmarked, setBookmarked] = useState(new Set());
  const [ratings, setRatings] = useState({});

  const allQuestions = useMemo(() => getAllQuestions(), []);

  const currentQuestions = topic
    ? interviewQuestions[topic]?.data || []
    : allQuestions;

  const filtered = currentQuestions.filter((q) => {
    if (difficulty !== "All" && q.difficulty !== difficulty) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase()) && !q.category.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleRate = (id, rating) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  const handleBookmark = (id) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (mode === "mock") {
    return (
      <div className="px-4 md:px-6 py-8 max-w-3xl mx-auto">
        <button onClick={() => setMode("browse")} className="text-sm text-gray-500 hover:text-white transition mb-6">← Back to Questions</button>
        <MockInterview
          questions={currentQuestions.slice(0, 10)}
          onComplete={(answers) => {
            setMode("browse");
          }}
        />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-8 max-w-5xl mx-auto space-y-8">
      <SlideUp>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black gradient-text">Interview Preparation</h1>
            <p className="text-gray-500 mt-1">{allQuestions.length} questions across 4 topics</p>
          </div>
          <button
            onClick={() => setMode("mock")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-sm hover:opacity-90 transition"
          >
            🎤 Start Mock Interview
          </button>
        </div>
      </SlideUp>

      {!topic ? (
        <SlideUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(interviewQuestions).map(([key, q]) => (
              <button
                key={key}
                onClick={() => { setTopic(key); setDifficulty("All"); setSearch(""); }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition text-center group"
              >
                <span className="text-4xl block mb-3">{topicIcons[key] || "📘"}</span>
                <p className="font-semibold group-hover:text-cyan-400 transition">{q.title}</p>
                <p className="text-xs text-gray-500 mt-1">{q.data.length} questions</p>
              </button>
            ))}
          </div>
        </SlideUp>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <button onClick={() => setTopic(null)} className="text-sm text-gray-500 hover:text-white transition shrink-0">
              ← All Topics
            </button>

            <div className="flex-1 max-w-md w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition text-sm"
              />
            </div>

            <div className="flex gap-2">
              {difficulties.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-4 py-2 rounded-xl text-sm transition ${difficulty === d ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-gray-500">No questions match your filters</p>
              </div>
            ) : (
              <motion.div layout className="space-y-4">
                {filtered.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    onRate={handleRate}
                    onBookmark={handleBookmark}
                    isBookmarked={bookmarked.has(q.id)}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default InterviewPage;
