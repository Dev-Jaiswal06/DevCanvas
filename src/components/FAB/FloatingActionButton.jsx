import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  { label: "Playground", to: "/playground", icon: "⚡" },
  { label: "Quiz", to: "/quiz", icon: "🧠" },
  { label: "Dashboard", to: "/dashboard", icon: "📊" },
];

function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {open && (
          <div className="absolute bottom-16 right-0 flex flex-col items-end gap-3">
            {actions.map((a) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link
                  to={a.to}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1E1E] border border-white/10 text-sm hover:bg-cyan-500/20 shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  <span>{a.icon}</span>
                  <span>{a.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-cyan-500 text-white shadow-lg flex items-center justify-center text-2xl hover:bg-cyan-600 transition"
      >
        {open ? "✕" : "⚡"}
      </button>
    </div>
  );
}

export default FloatingActionButton;
