import Lesson from "../models/Lesson.js";

export const getLessons = async (req, res) => {
  try {
    const { courseId } = req.params;
    const lessons = await Lesson.find({ courseId }).sort({ order: 1 }).select("-quiz -interview");
    res.json({ lessons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLesson = async (req, res) => {
  try {
    const { courseId, slug } = req.params;
    const lesson = await Lesson.findOne({ courseId, slug });
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json({ lesson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json({ lesson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json({ lesson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: "Lesson deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
