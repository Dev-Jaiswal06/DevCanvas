import { useState, useEffect, useCallback, useRef } from "react";
import { useDebounce } from "react-use";

function NoteEditor({ note, onUpdate, onDelete }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [saved, setSaved] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "");
    setSaved(true);
  }, [note?.id]);

  useDebounce(
    () => {
      if (note && (title !== note.title || content !== note.content)) {
        onUpdate?.({ ...note, title, content });
        setSaved(true);
      }
    },
    1000,
    [title, content]
  );

  const handleExport = useCallback(async () => {
    const md = `# ${title}\n\n${content}`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "note"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [title, content]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className={`text-xs ${saved ? "text-green-400" : "text-yellow-400"}`}>
            {saved ? "● Saved" : "○ Saving..."}
          </span>
          <span className="text-xs text-gray-500">{content.split(/\s+/).filter(Boolean).length} words</span>
        </div>
        <div className="flex gap-2">
          <button onClick={handleExport} className="px-3 py-1.5 rounded-lg bg-white/10 text-xs hover:bg-white/20 transition" title="Export Markdown">
            📥 Export
          </button>
          {note && (
            <button onClick={() => onDelete?.(note.id)} className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs hover:bg-red-500/30 transition">
              🗑 Delete
            </button>
          )}
        </div>
      </div>

      <input
        value={title}
        onChange={(e) => { setTitle(e.target.value); setSaved(false); }}
        placeholder="Note title..."
        className="w-full px-6 py-4 bg-transparent text-xl font-semibold outline-none border-b border-white/5"
      />

      <textarea
        value={content}
        onChange={(e) => { setContent(e.target.value); setSaved(false); }}
        placeholder="Write your notes in markdown... Use # for headings, - for lists, **bold**, *italic*, `code`"
        className="flex-1 w-full p-6 bg-transparent outline-none resize-none font-mono text-sm leading-relaxed"
      />
    </div>
  );
}

export default NoteEditor;
