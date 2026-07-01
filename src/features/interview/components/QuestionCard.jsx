import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuestionCard({ question, onRate, onBookmark, isBookmarked }) {
  const [revealed, setRevealed] = useState(false);

  const difficultyColor = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${difficultyColor[question.difficulty] || "bg-white/10"}`}>
                {question.difficulty}
              </span>
              <span className="text-xs text-gray-500 px-3 py-1 rounded-lg bg-white/5">
                {question.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{question.question}</h3>
          </div>
          <button
            onClick={() => onBookmark?.(question.id)}
            className={`shrink-0 text-xl transition ${isBookmarked ? "text-yellow-400" : "text-gray-600 hover:text-gray-400"}`}
          >
            {isBookmarked ? "★" : "☆"}
          </button>
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-300 leading-relaxed">{question.answer}</p>
                {question.rating !== undefined && (
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs text-gray-500">Was this helpful?</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => onRate?.(question.id, star)}
                        className={`text-sm transition ${(question.rating || 0) >= star ? "text-yellow-400" : "text-gray-600"}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setRevealed(!revealed)}
          className="mt-4 px-5 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition"
        >
          {revealed ? "Hide Answer" : "Reveal Answer"}
        </button>
      </div>
    </motion.div>
  );
}

export default QuestionCard;
