import { useState, useEffect, useCallback } from "react";

function MockInterview({ questions, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState({});
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isRunning, current]);

  const handleNext = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent((p) => p + 1);
      setTimeLeft(30);
    } else {
      setIsRunning(false);
      onComplete?.(answers);
    }
  }, [current, questions.length, onComplete, answers]);

  const q = questions[current];

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-500">Question {current + 1} of {questions.length}</span>
        <span className={`text-lg font-bold ${timeLeft <= 10 ? "text-red-400" : "text-cyan-400"}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-white/10 mb-6">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all"
          style={{ width: `${((timeLeft) / 30) * 100}%` }}
        />
      </div>

      <h3 className="text-xl font-semibold mb-6">{q?.question}</h3>

      <textarea
        value={answers[current] || ""}
        onChange={(e) => setAnswers((p) => ({ ...p, [current]: e.target.value }))}
        placeholder="Type your answer..."
        className="w-full h-40 rounded-xl bg-white/5 border border-white/10 p-4 resize-none outline-none focus:border-cyan-400 transition text-sm"
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={() => { setTimeLeft(30); setCurrent((p) => Math.max(0, p - 1)); }}
          disabled={current === 0}
          className="px-5 py-2 rounded-xl bg-white/10 text-sm hover:bg-white/20 transition disabled:opacity-30"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-medium hover:opacity-90 transition"
        >
          {current < questions.length - 1 ? "Next →" : "Finish"}
        </button>
      </div>
    </div>
  );
}

export default MockInterview;
