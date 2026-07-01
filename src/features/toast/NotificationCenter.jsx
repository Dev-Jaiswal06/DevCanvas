import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

let toastId = 0;

export function useNotifications() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 4000) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

const icons = {
  success: "✅",
  error: "❌",
  info: "💡",
  warning: "⚠️",
};

const colors = {
  success: "border-green-500/30 bg-green-500/10",
  error: "border-red-500/30 bg-red-500/10",
  info: "border-cyan-500/30 bg-cyan-500/10",
  warning: "border-yellow-500/30 bg-yellow-500/10",
};

function NotificationCenter({ toasts, removeToast }) {
  return (
    <div className="fixed top-20 right-5 z-[200] space-y-2 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md ${colors[toast.type]}`}
          >
            <span>{icons[toast.type]}</span>
            <p className="text-sm flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-500 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NotificationCenter;
