import { usePlayground } from "../../PlaygroundContext";

function EditorSettings() {
  const pg = usePlayground();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Theme</label>
        <select
          value={pg.theme}
          onChange={(e) => pg.setTheme(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"
        >
          {["One Dark", "GitHub", "Dracula", "Nord", "Monokai", "VS Code Dark"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Font Size: {pg.fontSize}px
        </label>
        <input
          type="range"
          min={10}
          max={24}
          value={pg.fontSize}
          onChange={(e) => pg.setFontSize(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Word Wrap</span>
        <button
          onClick={() => pg.setWordWrap(!pg.wordWrap)}
          className={`w-12 h-6 rounded-full transition ${pg.wordWrap ? "bg-cyan-500" : "bg-white/20"}`}
        >
          <div className={`w-4 h-4 rounded-full bg-white transition ml-1 ${pg.wordWrap ? "translate-x-6" : ""}`} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Auto Run</span>
        <button
          onClick={() => pg.setAutoRun(!pg.autoRun)}
          className={`w-12 h-6 rounded-full transition ${pg.autoRun ? "bg-cyan-500" : "bg-white/20"}`}
        >
          <div className={`w-4 h-4 rounded-full bg-white transition ml-1 ${pg.autoRun ? "translate-x-6" : ""}`} />
        </button>
      </div>

      <button
        onClick={() => pg.shortcutsOpen ? pg.setShortcutsOpen(false) : pg.setShortcutsOpen(true)}
        className="w-full py-3 rounded-xl bg-white/5 text-sm hover:bg-white/10"
      >
        Keyboard Shortcuts
      </button>
    </div>
  );
}

export default EditorSettings;
