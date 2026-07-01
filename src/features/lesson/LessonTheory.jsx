function LessonTheory({ theory }) {
  if (!theory) return null;

  const paragraphs = Array.isArray(theory) ? theory : [theory];

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Theory</h2>
      <div className="mt-6 space-y-4 leading-9 text-gray-300">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default LessonTheory;
