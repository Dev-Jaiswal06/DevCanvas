function LessonExercise({ exercise }) {
  if (!exercise) return null;
  return (
    <section className="mt-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-8">
      <h2 className="text-3xl font-bold">Exercise</h2>
      <p className="mt-4 text-gray-300">{exercise.instruction}</p>
      {exercise.hint && (
        <p className="mt-3 text-sm text-yellow-400">Hint: {exercise.hint}</p>
      )}
      {exercise.starterCode && (
        <pre className="mt-4 p-4 rounded-xl bg-black text-sm overflow-x-auto">
          {exercise.starterCode}
        </pre>
      )}
    </section>
  );
}

export default LessonExercise;
