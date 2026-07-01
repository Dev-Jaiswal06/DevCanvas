import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProjectDetail({ project, onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [codeView, setCodeView] = useState("starter");

  const tabs = ["overview", "steps", "starter", "completed"];

  const codeContent = codeView === "starter" ? project.starterCode : project.completedCode;

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm text-gray-500 hover:text-white transition">← Back to Projects</button>

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-500 mt-1">{project.description}</p>
          <div className="flex gap-4 mt-3 text-sm text-gray-500">
            <span>⏱ {project.duration}</span>
            <span>⭐ {project.xp} XP</span>
            <span className={`px-2 py-0.5 rounded text-xs ${project.difficulty === "Beginner" ? "bg-green-500/20 text-green-400" : project.difficulty === "Intermediate" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}>
              {project.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 border-b border-white/10 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm capitalize transition ${
              activeTab === tab ? "bg-cyan-500/20 text-cyan-400" : "text-gray-500 hover:text-white"
            }`}
          >
            {tab === "starter" ? "Starter Code" : tab === "completed" ? "Solution" : tab}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {project.requirements?.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-400 mt-0.5">◆</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            {project.resources?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <div className="space-y-2">
                  {project.resources.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-cyan-400 hover:underline">
                      📎 {r.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "steps" && (
          <div className="space-y-4">
            {project.steps?.map((step, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-1">{i + 1}. {step.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{step.description}</p>
                {step.code && (
                  <SyntaxHighlighter language="html" style={oneDark} customStyle={{ borderRadius: "12px", fontSize: "13px" }}>
                    {step.code}
                  </SyntaxHighlighter>
                )}
              </div>
            ))}
          </div>
        )}

        {(activeTab === "starter" || activeTab === "completed") && (
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              {["html", "css", "js"].map((lang) => {
                if (!codeContent?.[lang]) return null;
                return (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(activeTab)}
                    className={`px-3 py-1.5 rounded-lg text-xs uppercase font-mono bg-white/10 ${activeTab === activeTab ? "bg-cyan-500/20" : ""}`}
                  >
                    {lang === "js" ? "JavaScript" : lang.toUpperCase()}
                  </button>
                );
              })}
            </div>
            {["html", "css", "js"].map((lang) => {
              if (!codeContent?.[lang]) return null;
              return (
                <div key={lang}>
                  <p className="text-xs text-gray-500 mb-2 uppercase font-mono">{lang === "js" ? "JavaScript" : lang}</p>
                  <SyntaxHighlighter language={lang === "js" ? "javascript" : lang} style={oneDark} customStyle={{ borderRadius: "12px", fontSize: "13px", maxHeight: "400px" }}>
                    {codeContent[lang]}
                  </SyntaxHighlighter>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
