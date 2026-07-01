import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ isPinned: -1, updatedAt: -1 });
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user._id });
    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ note });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchNotes = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ notes: [] });
    const notes = await Note.find({
      user: req.user._id,
      $or: [
        { title: { $regex: q, $options: "i" } },
        { content: { $regex: q, $options: "i" } },
      ],
    }).sort({ updatedAt: -1 });
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
