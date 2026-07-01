import { motion } from "framer-motion";

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-500/30 transition group cursor-pointer"
      onClick={() => onSelect?.(project)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-lg">{project.id < 10 ? `0${project.id}` : project.id}</span>
          <span className={`px-3 py-1 rounded-lg text-xs font-medium ${difficultyColors[project.difficulty] || "bg-white/10"}`}>
            {project.difficulty}
          </span>
        </div>
        <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
          <span>⏱ {project.duration}</span>
          <span>⭐ {project.xp} XP</span>
          <span>📝 {project.steps?.length || 0} steps</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.requirements?.slice(0, 3).map((req, i) => (
            <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400">
              {req.length > 30 ? req.slice(0, 30) + "..." : req}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
