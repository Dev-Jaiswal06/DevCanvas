import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true, index: true },
    slug: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
    duration: { type: String, required: true },
    order: { type: Number, required: true },
    tags: [String],
    theory: [String],
    examples: [{ title: String, description: String, code: String, result: String }],
    syntax: [String],
    code: [{ title: String, language: String, code: String }],
    output: [String],
    commonMistakes: [String],
    bestPractices: [String],
    tips: [String],
    practice: [String],
    exercise: {
      instruction: String,
      hint: String,
      starterCode: String,
      solution: String,
    },
    quiz: [{ question: String, options: [String], answer: Number }],
    interview: [{ question: String, answer: String }],
    assignment: [String],
    resources: [{ title: String, url: String }],
    summary: String,
  },
  { timestamps: true }
);

lessonSchema.index({ courseId: 1, slug: 1 }, { unique: true });

export default mongoose.model("Lesson", lessonSchema);
