function SnippetCard({ snippet, onInsert }) {
  return (
    <button
      onClick={() => onInsert(snippet.code)}
      className="text-left w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
    >
      <p className="font-semibold text-sm">{snippet.name}</p>
      <p className="text-xs text-gray-500 mt-1">{snippet.desc}</p>
    </button>
  );
}

export default SnippetCard;
