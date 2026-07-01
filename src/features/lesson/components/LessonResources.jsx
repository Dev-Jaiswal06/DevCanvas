function LessonResources({ resources }) {
  if (!resources || resources.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Resources</h2>
      <ul className="mt-6 space-y-3">
        {resources.map((r, i) => (
          <li key={i}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              {r.title || r.url}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LessonResources;
