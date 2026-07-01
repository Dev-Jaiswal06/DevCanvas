import QuizAttempt from "../models/QuizAttempt.js";
import User from "../models/User.js";

export const submitQuiz = async (req, res) => {
  try {
    const { courseId, answers, timeTaken } = req.body;
    const { default: quizzes } = await import("../../src/data/quiz/index.js");
    const quiz = quizzes[courseId];
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const scored = quiz.data.map((q, i) => ({
      questionId: q.id,
      selected: answers[i],
      correct: answers[i] === q.answer,
    }));

    const correctCount = scored.filter((s) => s.correct).length;
    const total = quiz.data.length;
    const score = Math.round((correctCount / total) * 100);

    const attempt = await QuizAttempt.create({
      user: req.user._id,
      courseId,
      score,
      total,
      answers: scored,
      timeTaken,
    });

    const xpEarned = correctCount * 10;
    await User.findByIdAndUpdate(req.user._id, { $inc: { xp: xpEarned } });

    res.json({ attempt, correctCount, total, score, xpEarned });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttempts = async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20);
    res.json({ attempts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const { courseId } = req.params;
    const filter = courseId ? { courseId } : {};
    const leaderboard = await QuizAttempt.aggregate([
      { $match: filter },
      { $group: { _id: "$user", bestScore: { $max: "$score" }, totalAttempts: { $sum: 1 } } },
      { $sort: { bestScore: -1 } },
      { $limit: 50 },
      {
        $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" },
      },
      { $unwind: "$user" },
      {
        $project: {
          "user.name": 1, "user.username": 1, "user.avatar": 1,
          bestScore: 1, totalAttempts: 1,
        },
      },
    ]);
    res.json({ leaderboard });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
