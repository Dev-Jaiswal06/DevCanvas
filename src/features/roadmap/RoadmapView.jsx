import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import frontendRoadmap from "../../data/roadmaps/frontend";

const levelColors = {
  Beginner: "bg-green-500/20 border-green-500/30 text-green-400",
  Intermediate: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  Advanced: "bg-red-500/20 border-red-500/30 text-red-400",
};

const icons = {
  html: "🌐",
  css: "🎨",
  javascript: "⚡",
  git: "🔀",
  react: "⚛️",
};

function RoadmapView({ onStart = () => {} }) {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-black gradient-text">Frontend Roadmap</h1>
        <p className="text-gray-500 mt-3">Master web development step by step</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-8">
          {frontendRoadmap.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="shrink-0 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 ${
                    levelColors[item.level]
                  } ${item.completed ? "opacity-100" : item.locked ? "opacity-40" : "opacity-80"}`}
                >
                  {item.locked ? "🔒" : icons[item.id] || "📘"}
                </div>
              </div>
              <div className={`flex-1 ${item.locked ? "opacity-40" : ""}`}>
                <Link
                  to={item.locked ? "#" : `/${item.id}`}
                  onClick={item.locked ? (e) => e.preventDefault() : undefined}
                  className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${levelColors[item.level]}`}>
                      {item.level}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>⏱ {item.hours}h</span>
                    <span>⭐ {item.xp} XP</span>
                    {item.projects?.length > 0 && <span>🛠️ {item.projects.length} projects</span>}
                    {item.quiz && <span>🧠 Quiz</span>}
                    {item.certificate && <span>🎓 Certificate</span>}
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapView;
