import { Link } from "react-router-dom";

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

function LessonCard({ lesson, courseName }) {
  return (
    <Link
      to={`/${courseName}/${lesson.slug}`}
      className="block rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-cyan-500/30 transition group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-lg">{lesson.id < 10 ? `0${lesson.id}` : lesson.id}</span>
        <span
          className={`px-3 py-1 rounded-lg text-xs font-medium ${
            difficultyColors[lesson.difficulty] || "bg-white/10"
          }`}
        >
          {lesson.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
        {lesson.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{lesson.description}</p>

      <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
        <span>⏱ {lesson.duration}</span>
        {lesson.tags?.slice(0, 2).map((t) => (
          <span key={t} className="px-2 py-1 rounded bg-white/5">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default LessonCard;
