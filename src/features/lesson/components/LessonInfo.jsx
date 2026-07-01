function LessonInfo({ difficulty, duration, tags }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <span className="px-4 py-2 rounded-xl bg-cyan-500/20 text-sm font-medium">
        {difficulty}
      </span>
      <span className="px-4 py-2 rounded-xl bg-purple-500/20 text-sm font-medium">
        {duration}
      </span>
      {tags?.map((tag, i) => (
        <span key={i} className="px-4 py-2 rounded-xl bg-white/5 text-sm text-gray-400">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default LessonInfo;
