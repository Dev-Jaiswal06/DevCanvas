import { usePlayground } from "../PlaygroundContext";

const tabs = [
  { id: "html", label: "index.html" },
  { id: "css", label: "style.css" },
  { id: "javascript", label: "script.js" },
];

function TabBar() {
  const { activeTab, setActiveTab } = usePlayground();

  return (
    <div className="flex bg-[#252526] border-b border-white/10 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-white/10 ${
            activeTab === tab.id
              ? "bg-[#1E1E1E] text-white border-t-2 border-t-cyan-400"
              : "bg-[#2D2D2D] text-gray-500 hover:text-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
