function LessonQuiz({ quiz }) {
  if (!Array.isArray(quiz) || quiz.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Quiz</h2>
      {quiz.map((q, index) => (
        <div key={index} className="bg-white/5 p-6 rounded-2xl mt-6">
          <h3>Q{index + 1}. {q.question}</h3>
        </div>
      ))}
    </section>
  );
}

export default LessonQuiz;
