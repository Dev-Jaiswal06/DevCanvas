function CourseHero({ courseName, color }) {
  return (
    <div className={`rounded-3xl p-12 mb-10 bg-gradient-to-r ${color || "from-cyan-500/20 to-purple-500/20"} border border-white/10`}>
      <h1 className="text-5xl font-black">{courseName} Course</h1>
      <p className="mt-4 text-gray-400 text-lg">Master {courseName} with structured lessons, projects, and quizzes.</p>
    </div>
  );
}

export default CourseHero;
