function LessonAssignment({ assignment }) {
  if (!Array.isArray(assignment) || assignment.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Assignment</h2>
      <ul className="mt-6 space-y-4">
        {assignment.map((item, index) => (
          <li key={index} className="bg-cyan-500/10 p-5 rounded-xl">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LessonAssignment;
