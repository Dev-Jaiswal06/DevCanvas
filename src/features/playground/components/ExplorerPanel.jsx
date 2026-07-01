import { usePlayground } from "../PlaygroundContext";

const files = [
  { id: "html", label: "index.html", icon: "📄" },
  { id: "css", label: "style.css", icon: "🎨" },
  { id: "javascript", label: "script.js", icon: "⚡" },
];

function ExplorerPanel() {
  const { activeTab, setActiveTab } = usePlayground();

  return (
    <div className="h-full bg-[#1E1E1E] border-r border-white/10">
      <div className="px-4 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b border-white/10">
        Explorer
      </div>
      <div className="p-2 space-y-1">
        {files.map((file) => (
          <button
            key={file.id}
            onClick={() => setActiveTab(file.id)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm text-left ${
              activeTab === file.id
                ? "bg-cyan-500/20 text-cyan-400"
                : "text-gray-400 hover:bg-white/5"
            }`}
          >
            <span>{file.icon}</span>
            <span>{file.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExplorerPanel;
