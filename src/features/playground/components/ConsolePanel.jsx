import { usePlayground } from "../PlaygroundContext";

function ConsolePanel() {
  const { console: logs, errors, clearConsole } = usePlayground();
  const all = [
    ...logs.map((l) => ({ ...l, type: "log" })),
    ...errors.map((e) => ({ ...e, type: "error" })),
  ];

  return (
    <div className="h-full bg-[#1E1E1E] font-mono text-sm flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs uppercase tracking-wider text-gray-500">Console</span>
        <button
          onClick={clearConsole}
          className="text-xs text-gray-500 hover:text-white"
        >
          Clear
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {all.length === 0 && (
          <p className="text-gray-600 italic">No output yet.</p>
        )}
        {all.map((item, i) => (
          <div
            key={i}
            className={
              item.type === "error" ? "text-red-400" : "text-green-400"
            }
          >
            <span className="text-gray-600 mr-2">{`>`}</span>
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsolePanel;
