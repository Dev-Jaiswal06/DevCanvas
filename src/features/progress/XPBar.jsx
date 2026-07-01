const levelThresholds = [0, 250, 500, 1000, 2000, 3500, 5000, 7500, 10000];

function getLevel(xp) {
  let level = 0;
  for (let i = 0; i < levelThresholds.length; i++) {
    if (xp >= levelThresholds[i]) level = i + 1;
  }
  return level;
}

function getLevelProgress(xp) {
  const level = getLevel(xp) - 1;
  const current = levelThresholds[level] || 0;
  const next = levelThresholds[level + 1] || current + 2500;
  return { current, next, progress: ((xp - current) / (next - current)) * 100 };
}

function XPBar({ xp = 0 }) {
  const level = getLevel(xp);
  const { current, next, progress } = getLevelProgress(xp);

  return (
    <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold">Level {level}</span>
        <span className="text-xs text-gray-400">{xp.toLocaleString()} XP</span>
      </div>
      <div className="w-full h-2 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {xp - current} / {next - current} XP to next level
      </p>
    </div>
  );
}

export default XPBar;
