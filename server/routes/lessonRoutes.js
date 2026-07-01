import { Router } from "express";
import { getLessons, getLesson, createLesson, updateLesson, deleteLesson } from "../controllers/lessonController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = Router();

router.get("/:courseId", getLessons);
router.get("/:courseId/:slug", getLesson);
router.post("/", protect, adminOnly, createLesson);
router.put("/:id", protect, adminOnly, updateLesson);
router.delete("/:id", protect, adminOnly, deleteLesson);

export default router;
