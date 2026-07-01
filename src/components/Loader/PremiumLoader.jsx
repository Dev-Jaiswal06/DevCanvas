import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Code is poetry in motion",
  "Every expert was once a beginner",
  "Debugging is twice as hard as writing code",
  "The only way to learn is by building",
  "Small steps lead to big results",
  "Your future is created by what you do today",
];

function PremiumLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500 border-b-cyan-400 border-l-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">⚡</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold gradient-text">DevCanvas</h2>
        <p className="text-sm text-gray-500 mt-2 italic">"{quote}"</p>
      </div>

      <div className="mt-8 w-64">
        <div className="w-full h-1 rounded-full bg-[var(--border-color)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center">{Math.round(progress)}%</p>
      </div>
    </motion.div>
  );
}

export default PremiumLoader;
