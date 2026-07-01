import { motion } from "framer-motion";

function NoteList({ notes, activeId, onSelect, onPin, onDelete, onSearch, searchQuery }) {
  return (
    <div className="w-80 border-r border-white/10 flex flex-col">
      <div className="p-4 border-b border-white/10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch?.(e.target.value)}
          placeholder="Search notes..."
          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {notes.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-8">
            {searchQuery ? "No notes match your search" : "No notes yet. Create one!"}
          </p>
        )}

        {notes.map((note) => (
          <motion.div
            key={note.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-4 rounded-xl cursor-pointer transition group ${
              activeId === note.id
                ? "bg-cyan-500/10 border border-cyan-500/30"
                : "hover:bg-white/5 border border-transparent"
            }`}
            onClick={() => onSelect?.(note)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{note.title || "Untitled"}</p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {note.content?.replace(/[#*`]/g, "").trim() || "Empty note"}
                </p>
              </div>
              <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => { e.stopPropagation(); onPin?.(note.id); }}
                  className={`text-xs ${note.isPinned ? "text-yellow-400" : "text-gray-600 hover:text-gray-400"}`}
                >
                  📌
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete?.(note.id); }}
                  className="text-xs text-gray-600 hover:text-red-400"
                >
                  ✕
                </button>
              </div>
            </div>
            <p className="text-[10px] text-gray-600 mt-2">
              {new Date(note.updatedAt || note.createdAt).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
