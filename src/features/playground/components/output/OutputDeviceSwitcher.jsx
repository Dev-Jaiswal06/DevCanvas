import { usePlayground } from "../../PlaygroundContext";

function OutputDeviceSwitcher() {
  const { device, setDevice } = usePlayground();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      {[
        { id: "desktop", label: "🖥" },
        { id: "tablet", label: "📱" },
        { id: "mobile", label: "📲" },
      ].map((d) => (
        <button
          key={d.id}
          onClick={() => setDevice(d.id)}
          className={`px-3 py-1.5 rounded text-sm ${
            device === d.id ? "bg-cyan-500/20 text-cyan-400" : "text-gray-500"
          }`}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}

export default OutputDeviceSwitcher;
