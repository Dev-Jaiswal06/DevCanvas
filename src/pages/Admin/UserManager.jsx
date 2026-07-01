import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaEdit, FaBan } from "react-icons/fa";
import SlideUp from "../../features/animations/SlideUp";

const initialUsers = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "Admin", joined: "Jan 15, 2025", status: "Active" },
  { id: 2, name: "Priya Kapoor", email: "priya@example.com", role: "User", joined: "Mar 3, 2025", status: "Active" },
  { id: 3, name: "Amit Singh", email: "amit@example.com", role: "User", joined: "Apr 22, 2025", status: "Active" },
  { id: 4, name: "Neha Gupta", email: "neha@example.com", role: "User", joined: "Jun 8, 2025", status: "Banned" },
  { id: 5, name: "Vikram Patel", email: "vikram@example.com", role: "Admin", joined: "Dec 1, 2024", status: "Active" },
  { id: 6, name: "Sneha Reddy", email: "sneha@example.com", role: "User", joined: "Aug 14, 2025", status: "Active" },
  { id: 7, name: "Arjun Verma", email: "arjun@example.com", role: "User", joined: "Sep 30, 2025", status: "Banned" },
  { id: 8, name: "Kavita Joshi", email: "kavita@example.com", role: "User", joined: "Feb 18, 2026", status: "Active" },
];

const roleBadge = (role) => {
  if (role === "Admin") return "bg-purple-500/10 text-purple-400";
  return "bg-blue-500/10 text-blue-400";
};

const statusBadge = (status) => {
  if (status === "Active") return "bg-green-500/10 text-green-400";
  return "bg-red-500/10 text-red-400";
};

function UserManager() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const toggleBan = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Banned" : "Active" }
          : u
      )
    );
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-black gradient-text">User Manager</h1>
        <p className="text-gray-500 mt-1">Manage registered users</p>
      </SlideUp>

      <div className="relative max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
        />
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">User</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Joined</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filtered.map((user, i) => (
                  <motion.tr
                    key={user.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center text-sm font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{user.email}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${roleBadge(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{user.joined}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/10 transition text-cyan-400">
                          <FaEdit className="text-xs" />
                        </button>
                        <button
                          onClick={() => toggleBan(user.id)}
                          className={`p-2 rounded-lg transition ${
                            user.status === "Active"
                              ? "bg-white/5 hover:bg-red-500/10 text-red-400"
                              : "bg-green-500/10 hover:bg-green-500/20 text-green-400"
                          }`}
                        >
                          <FaBan className="text-xs" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default UserManager;
