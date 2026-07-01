import { useState, useEffect, useCallback } from "react";
import NoteList from "../../features/notes/components/NoteList";
import NoteEditor from "../../features/notes/components/NoteEditor";
import SlideUp from "../../features/animations/SlideUp";

const STORAGE_KEY = "devcanvas_notes";

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function NotesPage() {
  const [notes, setNotes] = useState(loadNotes);
  const [activeNote, setActiveNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => { saveNotes(notes); }, [notes]);

  const createNote = useCallback(() => {
    const newNote = {
      id: Date.now().toString(),
      title: "",
      content: "",
      isPinned: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setActiveNote(newNote);
  }, []);

  const updateNote = useCallback((updated) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === updated.id ? { ...updated, updatedAt: new Date().toISOString() } : n
      )
    );
    setActiveNote((prev) => (prev?.id === updated.id ? updated : prev));
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    setActiveNote((prev) => (prev?.id === id ? null : prev));
  }, []);

  const togglePin = useCallback((id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isPinned: !n.isPinned } : n))
    );
  }, []);

  const filtered = notes
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    })
    .filter(
      (n) =>
        !searchQuery ||
        n.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <h1 className="text-xl font-bold">Notes</h1>
          <p className="text-xs text-gray-500">{notes.length} notes</p>
        </div>
        <button
          onClick={createNote}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-semibold hover:opacity-90 transition"
        >
          + New Note
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <NoteList
          notes={filtered}
          activeId={activeNote?.id}
          onSelect={setActiveNote}
          onPin={togglePin}
          onDelete={deleteNote}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
        <NoteEditor note={activeNote} onUpdate={updateNote} onDelete={deleteNote} />
      </div>
    </div>
  );
}

export default NotesPage;
