import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import projectsData, { categories, getProjectsByCategory } from "../../data/projects";
import ProjectCard from "../../features/projects/components/ProjectCard";
import ProjectDetail from "../../features/projects/components/ProjectDetail";
import SlideUp from "../../features/animations/SlideUp";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function ProjectsPage() {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    let list = category ? getProjectsByCategory(category) : projectsData;
    if (difficulty !== "All") list = list.filter((p) => p.difficulty === difficulty);
    if (search) list = list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [category, difficulty, search]);

  if (selectedProject) {
    return (
      <div className="px-4 md:px-6 py-8 max-w-5xl mx-auto">
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto space-y-8">
      <SlideUp>
        <div className="text-center">
          <h1 className="text-3xl font-black gradient-text">Projects</h1>
          <p className="text-gray-500 mt-1">{projectsData.length} hands-on projects to build your portfolio</p>
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setCategory(null)}
            className={`p-6 rounded-2xl border text-center transition ${
              !category ? "bg-cyan-500/20 border-cyan-500/30" : "bg-white/5 border-white/10 hover:border-cyan-500/30"
            }`}
          >
            <span className="text-3xl">📂</span>
            <p className="font-semibold text-sm mt-2">All Projects</p>
            <p className="text-xs text-gray-500">{projectsData.length}</p>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`p-6 rounded-2xl border text-center transition ${
                category === cat.id ? "bg-cyan-500/20 border-cyan-500/30" : "bg-white/5 border-white/10 hover:border-cyan-500/30"
              }`}
            >
              <span className="text-3xl">{cat.icon}</span>
              <p className="font-semibold text-sm mt-2">{cat.title}</p>
              <p className="text-xs text-gray-500">{cat.count} projects</p>
            </button>
          ))}
        </div>
      </SlideUp>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="flex-1 max-w-md w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition text-sm"
        />
        <div className="flex gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-4 py-2 rounded-xl text-sm transition ${difficulty === d ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-gray-500">No projects match your filters</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default ProjectsPage;
