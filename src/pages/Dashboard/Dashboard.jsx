import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProgressDashboard from "../../features/progress/ProgressDashboard";
import SlideUp from "../../features/animations/SlideUp";
import FadeIn from "../../features/animations/FadeIn";

function Dashboard() {
  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black gradient-text">Dashboard</h1>
            <p className="text-gray-500 mt-1">Track your learning journey</p>
          </div>
          <Link
            to="/html"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-sm hover:opacity-90 transition"
          >
            Continue Learning
          </Link>
        </div>
      </SlideUp>

      <ProgressDashboard xp={1250} streak={5} totalDays={23} unlockedIds={["first-lesson", "ten-lessons"]} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FadeIn delay={0.1}>
          <Link to="/playground" className="block rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 p-6 hover:border-cyan-500/30 transition group">
            <span className="text-3xl">⚡</span>
            <h3 className="font-bold mt-3 group-hover:text-cyan-400 transition">Playground</h3>
            <p className="text-sm text-gray-500 mt-1">Write and test code live</p>
          </Link>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link to="/quiz" className="block rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 p-6 hover:border-purple-500/30 transition group">
            <span className="text-3xl">🧠</span>
            <h3 className="font-bold mt-3 group-hover:text-purple-400 transition">Quizzes</h3>
            <p className="text-sm text-gray-500 mt-1">Test your knowledge</p>
          </Link>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Link to="/roadmap" className="block rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 p-6 hover:border-green-500/30 transition group">
            <span className="text-3xl">🗺️</span>
            <h3 className="font-bold mt-3 group-hover:text-green-400 transition">Roadmap</h3>
            <p className="text-sm text-gray-500 mt-1">Plan your learning path</p>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

export default Dashboard;
