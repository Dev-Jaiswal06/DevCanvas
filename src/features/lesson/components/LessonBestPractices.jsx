function LessonBestPractices({ practices }) {
  if (!practices || practices.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">Best Practices</h2>
      <ul className="mt-6 space-y-4">
        {practices.map((item, i) => (
          <li key={i} className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LessonBestPractices;
