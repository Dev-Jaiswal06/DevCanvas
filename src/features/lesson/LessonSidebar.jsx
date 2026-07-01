import { NavLink } from "react-router-dom";
import LessonSearch from "./LessonSearch";

function LessonSidebar({ lessons, course, courseName }) {
  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-8">

        Course Content

      </h2>

      <LessonSearch lessons={lessons} />

      <div className="flex flex-col gap-2">

        {lessons.map((lesson) => (

          <NavLink
            key={lesson.slug}
            to={`/${courseName}/${lesson.slug}`}
            className="px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            <div>

              <p className="font-semibold">

                {lesson.title}

              </p>

              <p className="text-xs text-gray-400">

                {lesson.duration}

              </p>

            </div>
          </NavLink>

        ))}

      </div>

    </div>
  );
}

export default LessonSidebar;
