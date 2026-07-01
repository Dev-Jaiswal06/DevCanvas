import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTachometerAlt, FaBook, FaUsers, FaChartBar } from "react-icons/fa";

const sidebarLinks = [
  { to: "/admin", end: true, label: "Dashboard", icon: FaTachometerAlt },
  { to: "/admin/courses", label: "Courses", icon: FaBook },
  { to: "/admin/users", label: "Users", icon: FaUsers },
  { to: "/admin/analytics", label: "Analytics", icon: FaChartBar },
];

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 fixed top-20 left-0 bottom-0 bg-[var(--navbar-bg)] backdrop-blur-xl border-r border-[var(--border-color)] p-6 overflow-y-auto z-40">
        <h2 className="text-lg font-bold text-purple-400 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {sidebarLinks.map(({ to, end, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "text-[var(--text-secondary)] hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)]"
                }`
              }
            >
              <Icon className="text-base" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-64 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}

export default AdminLayout;
