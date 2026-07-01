import User from "../models/User.js";

export const getProfile = async (req, res) => {
  res.json({ user: req.user });
};

export const updateProfile = async (req, res) => {
  try {
    const allowed = ["name", "bio", "github", "linkedin", "website", "avatar", "preferences"];
    const updates = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true, runValidators: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("completedLessons", "title slug courseId");
    res.json({
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      completedLessons: user.completedLessons,
      achievements: user.achievements,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const completeLesson = async (req, res) => {
  try {
    const { lessonId } = req.body;
    const user = await User.findById(req.user._id);
    if (user.completedLessons.includes(lessonId)) {
      return res.json({ message: "Already completed" });
    }
    user.completedLessons.push(lessonId);
    user.xp += 50;
    user.level = Math.floor(user.xp / 500) + 1;
    await user.save();
    res.json({ xp: user.xp, level: user.level, completedLessons: user.completedLessons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({ role: "user" })
      .sort({ xp: -1 })
      .limit(50)
      .select("name username avatar xp level streak");
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};
    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select("-password -refreshToken");
    const total = await User.countDocuments(query);
    res.json({ users, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
