import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaDocker
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const tech = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-400" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-400" }
];

function TechStack() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-black text-center" data-aos="fade-up">
          Technologies You'll Learn
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {tech.map((item, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 50}
              className="bg-[var(--card-bg)] rounded-3xl p-8 flex flex-col items-center hover:scale-110 duration-300"
            >
              <div className={`text-5xl ${item.color}`}>{item.icon}</div>
              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
