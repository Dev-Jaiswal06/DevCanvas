import { motion } from "framer-motion";
import { FaUsers, FaBook, FaFileAlt, FaCertificate } from "react-icons/fa";
import SlideUp from "../../features/animations/SlideUp";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "Total Users", value: "12,845", icon: FaUsers, change: "+12%", color: "from-cyan-500 to-blue-500" },
  { label: "Total Courses", value: "4", icon: FaBook, change: "0%", color: "from-purple-500 to-pink-500" },
  { label: "Lessons Published", value: "148", icon: FaFileAlt, change: "+8%", color: "from-green-500 to-teal-500" },
  { label: "Certificates Issued", value: "3,210", icon: FaCertificate, change: "+23%", color: "from-orange-500 to-yellow-500" },
];

const monthlyUsers = [
  { month: "Jan", users: 4200 }, { month: "Feb", users: 4800 }, { month: "Mar", users: 5600 },
  { month: "Apr", users: 6200 }, { month: "May", users: 7100 }, { month: "Jun", users: 7800 },
  { month: "Jul", users: 8500 }, { month: "Aug", users: 9200 }, { month: "Sep", users: 10100 },
  { month: "Oct", users: 11000 }, { month: "Nov", users: 11800 }, { month: "Dec", users: 12845 },
];

const recentActivity = [
  { user: "Rahul S.", action: "Completed JavaScript Basics", time: "2 min ago" },
  { user: "Priya K.", action: "Earned React Advanced badge", time: "15 min ago" },
  { user: "Amit S.", action: "Scored 100% in CSS Quiz", time: "1 hr ago" },
  { user: "Neha G.", action: "Started HTML course", time: "3 hr ago" },
  { user: "Vikram P.", action: "Uploaded portfolio project", time: "5 hr ago" },
  { user: "Sneha R.", action: "Achieved 30-day streak", time: "1 day ago" },
];

function AdminDashboard() {
  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-black gradient-text">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of the platform</p>
      </SlideUp>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold mb-6">Monthly Active Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyUsers}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
              />
              <Bar dataKey="users" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400 shrink-0">
                  {item.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.user}</p>
                  <p className="text-xs text-gray-400 truncate">{item.action}</p>
                </div>
                <span className="text-xs text-gray-500 shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
