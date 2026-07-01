function LessonDiagram({ diagram }) {
  if (!diagram || diagram.length === 0) return null;

  const lines = Array.isArray(diagram) ? diagram : [diagram];

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Diagram</h2>
      <div className="rounded-2xl bg-black/50 border border-white/10 p-6 mt-4 overflow-auto font-mono text-sm leading-7">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">{line}</div>
        ))}
      </div>
    </section>
  );
}

export default LessonDiagram;
