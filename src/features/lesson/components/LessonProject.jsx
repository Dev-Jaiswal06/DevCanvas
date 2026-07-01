function LessonProject({ project }) {
  if (!project) return null;
  return (
    <section className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 p-8">
      <h2 className="text-3xl font-bold">Project</h2>
      <h3 className="text-xl mt-4">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      {project.requirements?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 rounded-xl bg-cyan-500 font-semibold hover:bg-cyan-600"
      >
        View Demo
      </a>
    </section>
  );
}

export default LessonProject;
