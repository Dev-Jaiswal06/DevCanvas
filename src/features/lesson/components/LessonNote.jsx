function LessonNote({ note }) {
  if (!note) return null;
  return (
    <div className="mt-10 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-6">
      <p className="text-yellow-300 font-semibold">📝 Note</p>
      <p className="mt-3 text-gray-300">{note}</p>
    </div>
  );
}

export default LessonNote;
