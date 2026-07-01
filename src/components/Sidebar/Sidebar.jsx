import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSidebar } from "../../context/SidebarContext";
import {
  FaHome,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCode,
  FaQuestionCircle,
  FaProjectDiagram,
  FaRoad,
  FaBook,
} from "react-icons/fa";

const menu = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "HTML", icon: <FaHtml5 />, path: "/html" },
  { name: "CSS", icon: <FaCss3Alt />, path: "/css" },
  { name: "JavaScript", icon: <FaJs />, path: "/javascript" },
  { name: "React", icon: <FaReact />, path: "/react" },
  { name: "Playground", icon: <FaCode />, path: "/playground" },
  { name: "Quiz", icon: <FaQuestionCircle />, path: "/quiz" },
  { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
  { name: "Roadmap", icon: <FaRoad />, path: "/roadmap" },
  { name: "Notes", icon: <FaBook />, path: "/notes" },
];

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      <motion.aside
        animate={{ width: isOpen ? 260 : 90 }}
        transition={{ duration: .3 }}
        className={`fixed top-20 left-0 h-[calc(100vh-80px)] bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] overflow-hidden z-40 transition-transform duration-300 ${
          !isOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col p-5 gap-2">

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
               className={({ isActive }) =>
              `flex items-center ${isOpen ? "justify-start gap-3 px-4" : "justify-center"} py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--text-primary)]"
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </NavLink>

        ))}

      </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;
