import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";
import { getCourse } from "../../utils/getCourse";
import CourseHero from "../../features/course/components/CourseHero";
import CourseStats from "../../features/course/components/CourseStats";
import CourseProgress from "../../features/course/components/CourseProgress";
import SearchInput from "../../features/course/components/search/SearchInput";
import DifficultyFilter from "../../features/course/components/filter/DifficultyFilter";
import LessonGrid from "../../features/course/components/lesson/LessonGrid";
import LessonList from "../../features/course/components/lesson/LessonList";
import SlideUp from "../../features/animations/SlideUp";

function CourseHome() {
  const { courseName } = useParams();
  const course = getCourse(courseName);
  const { progress } = useProgress();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [view, setView] = useState("grid");

  const lessons = (course?.lessons || []).filter((l) => {
    if (search && !l.title?.toLowerCase().includes(search.toLowerCase()) && !l.description?.toLowerCase().includes(search.toLowerCase())) return false;
    if (difficulty && l.difficulty !== difficulty) return false;
    return true;
  });

  if (!course) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold">Course Not Found</h2>
          <p className="text-gray-500 mt-2">The course "{courseName}" doesn't exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <CourseHero course={course} />
      </SlideUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CourseStats course={course} />
        <CourseProgress completed={(course?.lessons || []).filter((l) => progress.completedLessons.includes(l.id)).length} total={course?.lessons?.length || 0} />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <div className="flex items-center gap-4">
          <DifficultyFilter value={difficulty} onChange={setDifficulty} />
          <div className="flex bg-white/5 rounded-xl p-1">
            <button onClick={() => setView("grid")} className={`px-3 py-1.5 rounded-lg text-sm transition ${view === "grid" ? "bg-cyan-500/20 text-cyan-400" : "text-gray-500"}`}>Grid</button>
            <button onClick={() => setView("list")} className={`px-3 py-1.5 rounded-lg text-sm transition ${view === "list" ? "bg-cyan-500/20 text-cyan-400" : "text-gray-500"}`}>List</button>
          </div>
        </div>
      </div>

      <SlideUp>
        {lessons.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-gray-500">No lessons match your filters</p>
          </div>
        ) : view === "grid" ? (
          <LessonGrid lessons={lessons} courseName={courseName} />
        ) : (
          <LessonList lessons={lessons} courseName={courseName} />
        )}
      </SlideUp>
    </div>
  );
}

export default CourseHome;
