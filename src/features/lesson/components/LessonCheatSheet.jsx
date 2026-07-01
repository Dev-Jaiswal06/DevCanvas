function LessonCheatSheet({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Cheat Sheet</h2>
      <div className="mt-6 rounded-2xl bg-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 font-semibold">Tag/Elements</th>
              <th className="p-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {items.map((item, i) => (
              <tr key={i}>
                <td className="p-4 font-mono text-cyan-400">{item.tag}</td>
                <td className="p-4 text-gray-400">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LessonCheatSheet;
