import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSidebar } from "../../context/SidebarContext";
import { useAuth } from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const { toggleSidebar } = useSidebar();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center gap-x-2 md:gap-x-4">

        <div className="flex items-center gap-4 md:gap-8">
          <NavLink to="/" className="text-xl md:text-3xl font-black text-cyan-400 shrink-0">
            DevCanvas
          </NavLink>

          <div className="hidden lg:flex items-center gap-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/html">HTML</NavItem>
            <NavItem to="/css">CSS</NavItem>
            <NavItem to="/javascript">JavaScript</NavItem>
            <NavItem to="/react">React</NavItem>
            <NavItem to="/playground">Playground</NavItem>
            <NavItem to="/quiz">Quiz</NavItem>
            <NavItem to="/interview">Interview</NavItem>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden xl:block">
            <SearchBar />
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <NavLink to="/admin" className="px-3 py-1.5 rounded-lg bg-purple-500/20 text-xs font-semibold text-purple-400 hover:bg-purple-500/30">
                Admin
              </NavLink>
              <NavLink to="/dashboard" className="w-9 h-9 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold text-cyan-400 hover:bg-cyan-500/30">
                {user?.name?.charAt(0) || "U"}
              </NavLink>
              <button onClick={logout} className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-red-500/20">
                <FaSignOutAlt className="text-sm" />
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="px-4 py-2 rounded-xl bg-cyan-500 text-sm font-semibold hover:bg-cyan-600">
              Login
            </NavLink>
          )}

          <ThemeToggle />

          <button onClick={toggleSidebar} className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500 transition flex justify-center items-center">
            <FaBars />
          </button>

        </div>

      </div>
    </motion.nav>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
         className={({ isActive }) =>
        `transition font-semibold ${isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"}`
      }
    >
      {children}
    </NavLink>
  );
}

export default Navbar;
