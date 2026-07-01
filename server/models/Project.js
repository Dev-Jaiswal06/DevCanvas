import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
    category: { type: String, enum: ["html", "css", "javascript", "react"], required: true },
    duration: { type: String, required: true },
    order: { type: Number, required: true },
    requirements: [String],
    steps: [{ title: String, description: String, code: String }],
    starterCode: {
      html: { type: String, default: "" },
      css: { type: String, default: "" },
      js: { type: String, default: "" },
    },
    completedCode: {
      html: { type: String, default: "" },
      css: { type: String, default: "" },
      js: { type: String, default: "" },
    },
    screenshots: [String],
    demoUrl: { type: String },
    resources: [{ title: String, url: String }],
    xp: { type: Number, default: 100 },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
