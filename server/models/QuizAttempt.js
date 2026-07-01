import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: String, required: true },
    score: { type: Number, required: true },
    total: { type: Number, required: true },
    answers: [{ questionId: Number, selected: Number, correct: Boolean }],
    timeTaken: { type: Number },
  },
  { timestamps: true }
);

quizAttemptSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("QuizAttempt", quizAttemptSchema);
