import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const icons = [
  {
    icon: <FaHtml5 />,
    color: "text-orange-500",
    top: "10%",
    left: "8%",
  },
  {
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    top: "25%",
    right: "8%",
  },
  {
    icon: <FaJs />,
    color: "text-yellow-400",
    top: "70%",
    left: "12%",
  },
  {
    icon: <FaReact />,
    color: "text-cyan-400",
    top: "60%",
    right: "15%",
  },
  {
    icon: <FaNodeJs />,
    color: "text-green-500",
    top: "18%",
    left: "45%",
  },
  {
    icon: <FaGitAlt />,
    color: "text-red-500",
    top: "80%",
    right: "35%",
  },
];

function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + index,
          }}
          className={`absolute text-6xl ${item.color}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}

export default FloatingIcons;
