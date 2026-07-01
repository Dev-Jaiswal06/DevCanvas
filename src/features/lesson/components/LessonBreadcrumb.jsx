import { Link } from "react-router-dom";

function LessonBreadcrumb({ course, lesson }) {
  return (
    <div className="flex items-center gap-2 text-gray-400 mb-8">

      <Link to="/">Home</Link>

      /

      <Link to={`/${course.toLowerCase()}`}>
        {course}
      </Link>

      /

      <span className="text-cyan-400">
        {lesson}
      </span>

    </div>
  );
}

export default LessonBreadcrumb;
