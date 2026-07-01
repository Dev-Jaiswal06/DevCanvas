function LessonPractice({ practice }) {
  if (!practice || practice.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Try Yourself</h2>
      <ul className="mt-6 space-y-4">
        {practice.map((item, index) => (
          <li
            key={index}
            className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LessonPractice;
