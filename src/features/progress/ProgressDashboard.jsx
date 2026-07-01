import XPBar from "./XPBar";
import StreakCard from "./StreakCard";
import AchievementCard from "./AchievementCard";
import achievements from "../../data/achievements";

function ProgressDashboard({ xp = 0, streak = 0, totalDays = 0, unlockedIds = [] }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <XPBar xp={xp} />
        <StreakCard streak={streak} total={totalDays} />
        <div className="rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 p-5">
          <p className="text-4xl font-black text-purple-400">{xp > 0 ? Math.floor(xp / 100) : 0}</p>
          <p className="text-sm text-purple-400/80 mt-1">Lessons Completed</p>
          <p className="text-xs text-gray-500 mt-2">Keep learning!</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {achievements.map((a) => (
            <AchievementCard
              key={a.id}
              achievement={a}
              unlocked={unlockedIds.includes(a.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard;
