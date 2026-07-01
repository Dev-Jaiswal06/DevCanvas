import Certificate from "../models/Certificate.js";
import User from "../models/User.js";
import { generateCertificateId } from "../utils/generateToken.js";

export const generateCertificate = async (req, res) => {
  try {
    const { courseId, courseName } = req.body;
    const existing = await Certificate.findOne({ user: req.user._id, courseId });
    if (existing) return res.json({ certificate: existing });

    const user = await User.findById(req.user._id);
    const completedRequired = user.completedLessons.length >= 10;
    if (!completedRequired) {
      return res.status(400).json({ message: "Complete at least 10 lessons to earn a certificate" });
    }

    const certificate = await Certificate.create({
      user: req.user._id,
      courseId,
      courseName,
      certificateId: generateCertificateId(),
    });

    user.achievements.push("first-certificate");
    await user.save();

    res.status(201).json({ certificate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({ user: req.user._id }).sort({ issuedAt: -1 });
    res.json({ certificates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const certificate = await Certificate.findOne({ certificateId: id }).populate("user", "name");
    if (!certificate) return res.status(404).json({ valid: false, message: "Certificate not found" });
    res.json({ valid: true, certificate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
