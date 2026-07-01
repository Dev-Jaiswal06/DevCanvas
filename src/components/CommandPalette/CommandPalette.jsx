import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import courses from "../../data/courses";
import { useTheme } from "../../context/ThemeContext";

const actions = [
  { id: "dashboard", label: "Go to Dashboard", icon: "📊", to: "/dashboard" },
  { id: "playground", label: "Open Playground", icon: "⚡", to: "/playground" },
  { id: "quiz", label: "Take a Quiz", icon: "🧠", to: "/quiz" },
  { id: "interview", label: "Interview Prep", icon: "💼", to: "/interview" },
  { id: "projects", label: "Browse Projects", icon: "🛠️", to: "/projects" },
  { id: "roadmap", label: "View Roadmap", icon: "🗺️", to: "/roadmap" },
  { id: "settings", label: "Open Settings", icon: "⚙", to: "/settings" },
  { id: "notes", label: "My Notes", icon: "📝", to: "/notes" },
  { id: "profile", label: "My Profile", icon: "👤", to: "/profile" },
];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { theme, themes, setTheme } = useTheme();

  useHotkeys("ctrl+k", (e) => {
    e.preventDefault();
    setOpen((p) => !p);
  });

  const allLessons = useMemo(() => {
    const result = [];
    Object.values(courses).forEach((course) => {
      course.lessons?.forEach((lesson) => {
        result.push({ id: `${course.id}-${lesson.slug}`, label: lesson.title, icon: "📖", to: `/${course.id}/${lesson.slug}`, course: course.title });
      });
    });
    return result;
  }, []);

  const searchResults = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    const hits = [];

    actions.forEach((a) => {
      if (a.label.toLowerCase().includes(q)) hits.push({ ...a, type: "action" });
    });

    allLessons.forEach((l) => {
      if (l.label.toLowerCase().includes(q) || l.course?.toLowerCase().includes(q)) hits.push({ ...l, type: "lesson" });
    });

    return hits.slice(0, 12);
  }, [query, allLessons]);

  const handleSelect = useCallback(
    (item) => {
      setOpen(false);
      setQuery("");
      if (item.to) navigate(item.to);
      if (item.action === "theme") {
        const current = themes.indexOf(theme);
        setTheme(themes[(current + 1) % themes.length]);
      }
    },
    [navigate, theme, themes, setTheme]
  );

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-xl rounded-2xl bg-[#1E1E1E] border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lessons, pages, or actions..."
              className="w-full px-6 py-4 bg-transparent border-b border-white/10 text-lg outline-none"
            />

            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {query && searchResults.length > 0 && (
                <>
                  {searchResults.some((r) => r.type === "action") && (
                    <p className="px-4 py-2 text-[10px] text-gray-500 uppercase tracking-wider">Pages</p>
                  )}
                  {searchResults.filter((r) => r.type === "action").map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-left transition"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}

                  {searchResults.some((r) => r.type === "lesson") && (
                    <p className="px-4 py-2 text-[10px] text-gray-500 uppercase tracking-wider mt-2">Lessons</p>
                  )}
                  {searchResults.filter((r) => r.type === "lesson").map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-left transition"
                    >
                      <span className="text-lg">📖</span>
                      <div className="flex-1 min-w-0">
                        <span className="block truncate">{item.label}</span>
                        <span className="text-[10px] text-gray-500">{item.course}</span>
                      </div>
                    </button>
                  ))}
                </>
              )}

              {!query && actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleSelect(action)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-left transition"
                >
                  <span className="text-lg">{action.icon}</span>
                  <span>{action.label}</span>
                  <span className="ml-auto text-[10px] text-gray-600">{action.id}</span>
                </button>
              ))}

              {query && searchResults.length === 0 && (
                <p className="text-gray-500 text-center py-8 text-sm">No results found for "{query}"</p>
              )}
            </div>

            <div className="px-6 py-3 border-t border-white/10 flex items-center gap-4 text-[10px] text-gray-600">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
