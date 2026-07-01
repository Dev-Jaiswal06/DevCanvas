import { usePlayground } from "../PlaygroundContext";

function StatusBar() {
  const { activeTab, fontSize, theme } = usePlayground();
  const langLabel = { html: "HTML", css: "CSS", javascript: "JavaScript" };

  return (
    <div className="flex items-center justify-between px-4 py-1.5 bg-[#007ACC] text-white text-xs">
      <div className="flex items-center gap-4">
        <span>{langLabel[activeTab] || "HTML"}</span>
        <span>UTF-8</span>
        <span>Ln 1</span>
        <span>Col 0</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Spaces: 2</span>
        <span>{theme}</span>
        <span>{fontSize}px</span>
      </div>
    </div>
  );
}

export default StatusBar;
