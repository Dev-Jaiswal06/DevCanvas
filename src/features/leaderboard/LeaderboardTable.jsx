import { motion } from "framer-motion";

const medalColors = ["text-yellow-400", "text-gray-300", "text-orange-400"];

function LeaderboardTable({ users = [] }) {
  return (
    <div className="space-y-2">
      {users.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">🏆</p>
          <p className="text-gray-500">No leaderboard data yet</p>
        </div>
      )}

      {users.map((user, index) => (
        <motion.div
          key={user._id || index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition"
        >
          <span className={`w-8 text-center font-bold text-lg ${index < 3 ? medalColors[index] : "text-gray-500"}`}>
            {index < 3 ? ["🥇", "🥈", "🥉"][index] : `#${index + 1}`}
          </span>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-sm font-bold">
            {user.name?.[0]?.toUpperCase() || "?"}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold truncate">{user.name || "Anonymous"}</p>
            <p className="text-xs text-gray-500">@{user.username || "user"}</p>
          </div>

          <div className="text-right">
            <p className="font-bold text-cyan-400">{user.xp?.toLocaleString() || 0}</p>
            <p className="text-xs text-gray-500">XP</p>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-sm">Level {user.level || 1}</p>
            <p className="text-xs text-gray-500">{user.streak || 0} day streak</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default LeaderboardTable;
