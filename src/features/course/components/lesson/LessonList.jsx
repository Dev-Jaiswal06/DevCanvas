import { Link } from "react-router-dom";

function LessonList({ lessons, courseName }) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson, i) => (
        <Link
          key={lesson.id}
          to={`/${courseName}/${lesson.slug}`}
          className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition group"
        >
          <span className="text-sm font-mono text-gray-500 w-8">
            {i + 1}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold group-hover:text-cyan-400 transition truncate">
              {lesson.title}
            </p>
            <p className="text-xs text-gray-500 truncate">{lesson.description}</p>
          </div>
          <span className="text-xs text-gray-500 shrink-0">⏱ {lesson.duration}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            lesson.difficulty === "Beginner" ? "bg-green-500/20 text-green-400" :
            lesson.difficulty === "Intermediate" ? "bg-yellow-500/20 text-yellow-400" :
            "bg-red-500/20 text-red-400"
          }`}>
            {lesson.difficulty}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default LessonList;
