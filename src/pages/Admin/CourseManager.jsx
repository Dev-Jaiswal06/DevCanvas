import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
import SlideUp from "../../features/animations/SlideUp";

const initialCourses = [
  { id: 1, name: "HTML", lessons: 32, status: "Published", bg: "from-orange-500/20 to-red-500/10" },
  { id: 2, name: "CSS", lessons: 40, status: "Published", bg: "from-blue-500/20 to-cyan-500/10" },
  { id: 3, name: "JavaScript", lessons: 55, status: "Published", bg: "from-yellow-500/20 to-amber-500/10" },
  { id: 4, name: "React", lessons: 48, status: "Draft", bg: "from-cyan-500/20 to-teal-500/10" },
];

function CourseManager() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Published" ? "Draft" : "Published" }
          : c
      )
    );
  };

  const filtered = courses.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-black gradient-text">Course Manager</h1>
        <p className="text-gray-500 mt-1">Manage all courses and their status</p>
      </SlideUp>

      <div className="relative max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
        />
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Course</th>
              <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Lessons</th>
              <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="text-right py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <motion.tr
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${course.bg} flex items-center justify-center text-sm font-bold`}>
                        {course.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="font-semibold">{course.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{course.lessons}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        course.status === "Published"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(course.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                          course.status === "Published"
                            ? "border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                            : "border-green-500/30 text-green-400 hover:bg-green-500/10"
                        }`}
                      >
                        Set {course.status === "Published" ? "Draft" : "Published"}
                      </button>
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-gray-400">
                        <FaPencilAlt className="text-xs" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">No courses found.</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default CourseManager;
