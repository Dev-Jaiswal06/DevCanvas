import { usePlayground } from "../PlaygroundContext";
import downloadProject from "../helpers/downloadProject";
import uploadProject from "../helpers/uploadProject";
import generateFiles from "../helpers/generateFiles";
import { formatHTML, formatCSS, formatJS } from "../helpers/formatDocument";
import toast from "react-hot-toast";
import templates from "../../../data/templates/index";

function Toolbar() {
  const pg = usePlayground();

  const handleRun = () => {
    pg.clearConsole();
    pg.setConsole([{ message: "Code executed successfully." }]);
  };

  const handleCopy = async () => {
    const code = pg[pg.activeTab === "html" ? "html" : pg.activeTab === "css" ? "css" : "javascript"];
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Copied!");
    } catch {
      toast.error("Copy failed");
    }
  };

  const handleDownload = () => {
    const files = generateFiles(pg.html, pg.css, pg.javascript);
    downloadProject(files, "devcanvas-project");
    toast.success("Project downloaded!");
  };

  const handleUpload = async () => {
    const files = await uploadProject();
    if (!files || files.length === 0) return;
    for (const f of files) {
      if (f.name.endsWith(".html")) pg.setHTML(f.content);
      else if (f.name.endsWith(".css")) pg.setCSS(f.content);
      else if (f.name.endsWith(".js")) pg.setJavaScript(f.content);
    }
    toast.success(`${files.length} file(s) loaded!`);
  };

  const handleReset = () => {
    pg.reset();
    toast.success("Reset to default");
  };

  const handleFormat = () => {
    const fmt = { html: formatHTML, css: formatCSS, javascript: formatJS };
    const fn = fmt[pg.activeTab];
    if (!fn) return;
    const code = pg[pg.activeTab === "html" ? "html" : pg.activeTab === "css" ? "css" : "javascript"];
    const formatted = fn(code);
    const setter = pg[pg.activeTab === "html" ? "setHTML" : pg.activeTab === "css" ? "setCSS" : "setJavaScript"];
    pg[setter](formatted);
    toast.success("Formatted!");
  };

  const handleTemplate = (e) => {
    const template = templates[e.target.value];
    if (template) {
      pg.loadTemplate(template);
      toast.success(`Template: ${template.name}`);
    }
  };

  const handleDevice = (e) => {
    pg.setDevice(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E1E1E] border-b border-white/10 overflow-x-auto">
      <button onClick={handleRun} className="flex items-center gap-1 px-3 py-1.5 rounded bg-green-600 text-white text-xs hover:bg-green-700">
        ▶ Run
      </button>
      <button onClick={handleCopy} className="px-3 py-1.5 rounded bg-white/10 text-xs hover:bg-white/20">
        Copy
      </button>
      <button onClick={handleDownload} className="px-3 py-1.5 rounded bg-white/10 text-xs hover:bg-white/20">
        Download
      </button>
      <button onClick={handleUpload} className="px-3 py-1.5 rounded bg-white/10 text-xs hover:bg-white/20">
        Upload
      </button>
      <button onClick={handleFormat} className="px-3 py-1.5 rounded bg-white/10 text-xs hover:bg-white/20">
        Format
      </button>
      <button onClick={handleReset} className="px-3 py-1.5 rounded bg-red-500/20 text-xs hover:bg-red-500/30">
        Reset
      </button>

      <div className="w-px h-5 bg-white/20" />

      <select onChange={handleTemplate} className="px-2 py-1.5 rounded bg-white/10 text-xs">
        <option value="">Templates</option>
        {Object.entries(templates).map(([key, t]) => (
          <option key={key} value={key}>{t.name}</option>
        ))}
      </select>

      <select onChange={handleDevice} value={pg.device} className="px-2 py-1.5 rounded bg-white/10 text-xs">
        <option value="desktop">🖥 Desktop</option>
        <option value="tablet">📱 Tablet</option>
        <option value="mobile">📲 Mobile</option>
      </select>

      <div className="w-px h-5 bg-white/20" />

      <label className="flex items-center gap-1 text-xs text-gray-400">
        <input type="checkbox" checked={pg.autoRun} onChange={(e) => pg.setAutoRun(e.target.checked)} />
        Auto
      </label>

      <div className="ml-auto flex items-center gap-2">
        <select value={pg.fontSize} onChange={(e) => pg.setFontSize(Number(e.target.value))} className="px-2 py-1.5 rounded bg-white/10 text-xs">
          {[12, 14, 16, 18, 20].map((s) => (
            <option key={s} value={s}>{s}px</option>
          ))}
        </select>

        <button onClick={() => pg.setSettingsOpen(true)} className="px-3 py-1.5 rounded bg-white/10 text-xs hover:bg-white/20">
          ⚙
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
