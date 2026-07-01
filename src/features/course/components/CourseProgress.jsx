function CourseProgress({ completed, total }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="rounded-2xl bg-white/5 p-6 border border-white/10 mb-10">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold">Course Progress</span>
        <span className="text-sm text-cyan-400">{pct}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">{completed} / {total} lessons completed</p>
    </div>
  );
}

export default CourseProgress;
