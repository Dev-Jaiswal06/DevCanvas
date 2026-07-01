import { Router } from "express";
import { getProfile, updateProfile, getProgress, completeLesson, getLeaderboard, getUsers, updateUserRole } from "../controllers/userController.js";
import { protect, adminOnly } from "../middleware/auth.js";
import { validateProfile } from "../middleware/validate.js";

const router = Router();

router.get("/profile", protect, getProfile);
router.patch("/profile", protect, validateProfile, updateProfile);
router.get("/progress", protect, getProgress);
router.post("/complete-lesson", protect, completeLesson);
router.get("/leaderboard", protect, getLeaderboard);
router.get("/", protect, adminOnly, getUsers);
router.patch("/:id/role", protect, adminOnly, updateUserRole);

export default router;
