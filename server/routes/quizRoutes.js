import { Router } from "express";
import { submitQuiz, getAttempts, getLeaderboard } from "../controllers/quizController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/submit", protect, submitQuiz);
router.get("/attempts", protect, getAttempts);
router.get("/leaderboard/:courseId?", getLeaderboard);

export default router;
