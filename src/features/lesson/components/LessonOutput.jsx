function LessonOutput({ output }) {
  if (!output) return null;

  const lines = Array.isArray(output) ? output : [output];

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-4">Output</h2>
      <div className="rounded-2xl bg-white p-6 text-black font-mono text-sm">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>
    </section>
  );
}

export default LessonOutput;
