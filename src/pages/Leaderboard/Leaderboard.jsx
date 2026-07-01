import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";
import LeaderboardTable from "../../features/leaderboard/LeaderboardTable";
import SlideUp from "../../features/animations/SlideUp";

const baseUsers = [
  { name: "Arjun Singh", username: "arjun_dev", xp: 14200, streak: 28 },
  { name: "Priya Sharma", username: "priya_css", xp: 13800, streak: 25 },
  { name: "Rahul Verma", username: "rahul_js", xp: 13100, streak: 22 },
  { name: "Neha Gupta", username: "neha_react", xp: 12400, streak: 20 },
  { name: "Amit Patel", username: "amit_fullstack", xp: 11700, streak: 19 },
  { name: "Sneha Reddy", username: "sneha_ui", xp: 11000, streak: 18 },
  { name: "Vikram Joshi", username: "vikram_node", xp: 10300, streak: 16 },
  { name: "Ananya Kapoor", username: "ananya_design", xp: 9600, streak: 15 },
  { name: "Rohit Kumar", username: "rohit_dev", xp: 8900, streak: 14 },
  { name: "Divya Mishra", username: "divya_code", xp: 8200, streak: 13 },
  { name: "Karan Mehta", username: "karan_pro", xp: 7500, streak: 12 },
  { name: "Isha Nair", username: "isha_learner", xp: 6800, streak: 11 },
  { name: "Manish Yadav", username: "manish_dev", xp: 6100, streak: 10 },
  { name: "Pooja Desai", username: "pooja_ux", xp: 5400, streak: 9 },
  { name: "Siddharth Roy", username: "sid_engineer", xp: 4700, streak: 8 },
  { name: "Tanya Bhatia", username: "tanya_dev", xp: 4000, streak: 7 },
  { name: "Harsh Agarwal", username: "harsh_coder", xp: 3300, streak: 6 },
  { name: "Meera Choudhury", username: "meera_dev", xp: 2600, streak: 5 },
  { name: "Gaurav Saxena", username: "gaurav_pro", xp: 1900, streak: 4 },
  { name: "Ritu Jain", username: "ritu_dev", xp: 1200, streak: 3 },
];

function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState("all");
  const { progress } = useProgress();

  const users = useMemo(() => {
    return baseUsers.map((u, i) => {
      const variance = timeframe === "weekly" ? 0.3 : timeframe === "monthly" ? 0.6 : 1;
      const adjustedXp = Math.round(u.xp * variance);
      return {
        ...u,
        _id: i,
        xp: adjustedXp,
        level: Math.max(1, Math.floor(adjustedXp / 500) + 1),
        streak: Math.max(0, Math.round(u.streak * variance)),
      };
    }).sort((a, b) => b.xp - a.xp);
  }, [timeframe]);

  return (
    <div className="px-4 md:px-6 py-8 max-w-4xl mx-auto space-y-8">
      <SlideUp>
        <div className="text-center">
          <h1 className="text-3xl font-black gradient-text">Leaderboard</h1>
          <p className="text-gray-500 mt-1">Top learners ranked by XP</p>
          {progress.xp > 0 && (
            <p className="text-sm text-cyan-400 mt-2">Your XP: {progress.xp} (Level {Math.floor(progress.xp / 500) + 1})</p>
          )}
        </div>
      </SlideUp>

      <div className="flex justify-center gap-2">
        {["weekly", "monthly", "all"].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-5 py-2 rounded-xl text-sm capitalize transition ${timeframe === tf ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
          >
            {tf === "all" ? "All Time" : tf}
          </button>
        ))}
      </div>

      <LeaderboardTable users={users} />
    </div>
  );
}

export default LeaderboardPage;
