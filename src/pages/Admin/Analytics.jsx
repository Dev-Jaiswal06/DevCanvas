import { motion } from "framer-motion";
import { FaStar, FaCheckCircle, FaFire, FaQuestionCircle } from "react-icons/fa";
import SlideUp from "../../features/animations/SlideUp";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const statCards = [
  { label: "Total XP Earned", value: "2,450,800", icon: FaStar, change: "+15%", color: "from-yellow-500 to-orange-500" },
  { label: "Avg Completion Rate", value: "78%", icon: FaCheckCircle, change: "+5%", color: "from-green-500 to-teal-500" },
  { label: "Active Streaks", value: "1,245", icon: FaFire, change: "+22%", color: "from-red-500 to-pink-500" },
  { label: "Quiz Attempts", value: "18,920", icon: FaQuestionCircle, change: "+31%", color: "from-purple-500 to-indigo-500" },
];

const dailyXP = [
  { day: "Mon", xp: 12400 }, { day: "Tue", xp: 15800 }, { day: "Wed", xp: 14200 },
  { day: "Thu", xp: 18900 }, { day: "Fri", xp: 16300 }, { day: "Sat", xp: 22100 },
  { day: "Sun", xp: 19500 },
];

const courseDistribution = [
  { name: "HTML", value: 35, color: "#F97316" },
  { name: "CSS", value: 25, color: "#3B82F6" },
  { name: "JavaScript", value: 28, color: "#EAB308" },
  { name: "React", value: 12, color: "#06B6D4" },
];

function Analytics() {
  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-black gradient-text">Analytics</h1>
        <p className="text-gray-500 mt-1">Platform metrics and insights</p>
      </SlideUp>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden group"
          >
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stat.color} rounded-2xl`} />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white text-lg" />
                </div>
                <span className="text-xs font-semibold text-green-400 bg-green-500/10 px-2 py-1 rounded-full">{stat.change}</span>
              </div>
              <p className="text-3xl font-black mt-4">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold mb-6">Daily XP (Last 7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyXP}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
              />
              <Line type="monotone" dataKey="xp" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: "#8B5CF6", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold mb-6">Course Enrollment Distribution</h2>
          <div className="flex items-center justify-center h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {courseDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {courseDistribution.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: c.color }} />
                <span className="text-xs text-gray-400">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
