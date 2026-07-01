function LessonInterview({ interview }) {
  if (!Array.isArray(interview) || interview.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Interview Questions</h2>
      {interview.map((item, index) => (
        <div key={index} className="mt-6 rounded-2xl bg-white/5 p-6">
          <h3>{item.question}</h3>
          <p className="mt-4 text-gray-400">{item.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default LessonInterview;
