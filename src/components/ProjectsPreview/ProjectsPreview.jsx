import { FaGithub } from "react-icons/fa";

const projects = [
  { title: "Netflix Clone", desc: "Full-stack Netflix clone with React", tech: "React, Firebase" },
  { title: "Spotify UI", desc: "Spotify homepage clone with dark mode", tech: "React, Tailwind" },
  { title: "AI Interviewer", desc: "AI-powered mock interview platform", tech: "React, AI API" },
  { title: "Portfolio", desc: "Personal portfolio with animations", tech: "React, Framer Motion" }
];

function ProjectsPreview() {
  return (
    <section className="py-24 bg-[#090E1C]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-black text-center" data-aos="fade-up">
          Projects You'll Build
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {projects.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:scale-105 duration-300"
            >
              <FaGithub className="text-4xl text-cyan-400" />
              <h3 className="text-2xl font-bold mt-6">{p.title}</h3>
              <p className="text-gray-400 mt-3">{p.desc}</p>
              <p className="text-xs text-cyan-400 mt-4">{p.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
