const shortcuts = [
  { key: "Ctrl + Enter", action: "Run Code" },
  { key: "Ctrl + S", action: "Download Project" },
  { key: "Ctrl + Shift + F", action: "Format Code" },
  { key: "Ctrl + /", action: "Toggle Comment" },
  { key: "Ctrl + D", action: "Duplicate Line" },
  { key: "Ctrl + K", action: "Search" },
];

function ShortcutModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-[#1E1E1E] rounded-2xl p-8 w-full max-w-md border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Keyboard Shortcuts</h2>
        <div className="space-y-3">
          {shortcuts.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-gray-400">{s.action}</span>
              <kbd className="px-3 py-1 rounded bg-white/10 text-xs font-mono">{s.key}</kbd>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-8 w-full py-3 rounded-xl bg-cyan-500 font-semibold hover:bg-cyan-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ShortcutModal;
