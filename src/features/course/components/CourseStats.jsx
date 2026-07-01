function CourseStats({ total, completed, difficulty, duration, projects }) {
  const stats = [
    { label: "Lessons", value: total },
    { label: "Completed", value: completed },
    { label: "Difficulty", value: difficulty },
    { label: "Duration", value: duration },
    { label: "Projects", value: projects },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl bg-white/5 p-5 text-center border border-white/10">
          <p className="text-2xl font-bold text-cyan-400">{s.value}</p>
          <p className="text-sm text-gray-500 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseStats;
