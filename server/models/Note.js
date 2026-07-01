import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, required: true, maxlength: 200 },
    content: { type: String, default: "" },
    isPinned: { type: Boolean, default: false },
    tags: [String],
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  },
  { timestamps: true }
);

noteSchema.index({ user: 1, isPinned: -1, updatedAt: -1 });
noteSchema.index({ user: 1, title: "text", content: "text" });

export default mongoose.model("Note", noteSchema);
