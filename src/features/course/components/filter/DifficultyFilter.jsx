const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function DifficultyFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {difficulties.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d === "All" ? "" : d)}
          className={`px-4 py-2 rounded-xl text-sm transition ${
            value === d || (d === "All" && !value)
              ? "bg-cyan-500/20 text-cyan-400"
              : "bg-white/5 text-gray-400 hover:bg-white/10"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

export default DifficultyFilter;
