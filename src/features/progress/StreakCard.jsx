function StreakCard({ streak = 0, total = 0 }) {
  return (
    <div className="rounded-2xl bg-orange-500/10 border border-orange-500/30 p-5 text-center">
      <p className="text-4xl font-black text-orange-400">{streak}</p>
      <p className="text-sm text-orange-400/80 mt-1">Day Streak</p>
      <div className="flex justify-center gap-1 mt-3">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < streak % 7 ? "bg-orange-400" : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">{total} days total</p>
    </div>
  );
}

export default StreakCard;
