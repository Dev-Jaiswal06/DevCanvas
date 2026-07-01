import { FaCode, FaRobot, FaQuestionCircle, FaProjectDiagram, FaComments, FaStickyNote, FaChartLine, FaCertificate } from "react-icons/fa";

const features = [
  { icon: <FaCode />, title: "Interactive Coding", desc: "Live editors with instant output" },
  { icon: <FaRobot />, title: "AI Assistant", desc: "Smart hints and explanations" },
  { icon: <FaQuestionCircle />, title: "MCQ Quizzes", desc: "Test your knowledge" },
  { icon: <FaProjectDiagram />, title: "Real Projects", desc: "Build portfolio-ready projects" },
  { icon: <FaComments />, title: "Interview Prep", desc: "100+ curated questions" },
  { icon: <FaStickyNote />, title: "Notes & Bookmarks", desc: "Save and revisit anytime" },
  { icon: <FaChartLine />, title: "Track Progress", desc: "Visual progress dashboard" },
  { icon: <FaCertificate />, title: "Certificates", desc: "Earn completion badges" }
];

function Features() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-black text-center" data-aos="fade-up">
          Everything You Need
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((f, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 50}
              className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] p-6 text-center hover:bg-[var(--accent)]/10 duration-300"
            >
              <div className="text-4xl text-cyan-400 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold mt-5">{f.title}</h3>
              <p className="text-[var(--text-secondary)] mt-3">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
