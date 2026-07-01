import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quizzes from "../../data/quiz";
import SlideUp from "../../features/animations/SlideUp";

const topicIcons = { html: "🌐", css: "🎨", javascript: "⚡", react: "⚛️" };

function QuizPage() {
  const [topic, setTopic] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  if (!topic) {
    return (
      <div className="px-4 md:px-6 py-12 max-w-3xl mx-auto">
        <SlideUp>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black gradient-text">🧠 Choose a Quiz</h1>
            <p className="text-gray-500 mt-2">Test your knowledge across topics</p>
          </div>
        </SlideUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(quizzes).map(([key, quiz]) => (
            <button
              key={key}
              onClick={() => setTopic(key)}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition text-center group"
            >
              <span className="text-4xl block mb-3">{topicIcons[key] || "📘"}</span>
              <p className="font-semibold group-hover:text-cyan-400 transition">{quiz.title}</p>
              <p className="text-xs text-gray-500 mt-1">{quiz.data.length} questions</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const quiz = quizzes[topic].data;
  const question = quiz[current];
  const selected = answers[question.id];
  const correctCount = quiz.filter((q) => answers[q.id] === q.answer).length;

  const handleAnswer = (idx) => {
    if (selected !== undefined) return;
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
  };

  const handleNext = () => {
    if (current < quiz.length - 1) {
      setCurrent((p) => p + 1);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const percentage = Math.round((correctCount / quiz.length) * 100);
    return (
      <div className="px-4 md:px-6 py-12 max-w-2xl mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="space-y-6">
          <span className="text-6xl">{percentage >= 80 ? "🎉" : percentage >= 50 ? "💪" : "📚"}</span>
          <h2 className="text-3xl font-bold gradient-text">Quiz Complete!</h2>
          <div className="text-6xl font-black">{correctCount}/{quiz.length}</div>
          <p className="text-gray-400">{percentage}% Score</p>
          <div className="w-full max-w-xs mx-auto h-3 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all" style={{ width: `${percentage}%` }} />
          </div>
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={() => { setTopic(null); setCurrent(0); setAnswers({}); setDone(false); }} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Try Another Quiz
            </button>
            <button onClick={() => { setCurrent(0); setAnswers({}); setDone(false); }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:opacity-90 transition">
              Retry
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-12 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => { setTopic(null); setCurrent(0); setAnswers({}); }} className="text-gray-500 hover:text-white transition text-sm">← Back</button>
        <span className="text-sm text-gray-500">{current + 1} / {quiz.length}</span>
      </div>

      <div className="w-full h-1.5 rounded-full bg-white/10 mb-8">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all" style={{ width: `${((current + 1) / quiz.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">
          <h2 className="text-2xl font-bold">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((opt, idx) => {
              const isCorrect = selected !== undefined && idx === question.answer;
              const isWrong = selected === idx && idx !== question.answer;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== undefined}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition ${
                    isCorrect
                      ? "bg-green-500/20 border-green-500/50 text-green-400"
                      : isWrong
                      ? "bg-red-500/20 border-red-500/50 text-red-400"
                      : selected !== undefined
                      ? "opacity-50 bg-white/5 border-white/10"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/30"
                  }`}
                >
                  <span className="text-sm font-mono mr-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {selected !== undefined && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400">{question.explanation}</p>
            </motion.div>
          )}

          {selected !== undefined && (
            <button onClick={handleNext} className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:opacity-90 transition">
              {current < quiz.length - 1 ? "Next →" : "See Results"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default QuizPage;
