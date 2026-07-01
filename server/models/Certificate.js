import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    certificateId: { type: String, unique: true, required: true },
    issuedAt: { type: Date, default: Date.now },
    downloadCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

certificateSchema.index({ user: 1, courseId: 1 }, { unique: true });

export default mongoose.model("Certificate", certificateSchema);
