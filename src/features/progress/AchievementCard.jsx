function AchievementCard({ achievement, unlocked = false }) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center transition ${
        unlocked
          ? "bg-gradient-to-b from-yellow-500/10 to-transparent border-yellow-500/30"
          : "bg-white/5 border-white/10 opacity-50"
      }`}
    >
      <span className="text-4xl block mb-2">{achievement.icon}</span>
      <h4 className="font-semibold text-sm">{achievement.title}</h4>
      <p className="text-xs text-gray-500 mt-1">{achievement.desc}</p>
      <div className="flex items-center justify-center gap-1 mt-3">
        <span className="text-xs text-yellow-400">⭐ {achievement.xp} XP</span>
        {unlocked && <span className="text-xs text-green-400"> ✓ Unlocked</span>}
      </div>
    </div>
  );
}

export default AchievementCard;
