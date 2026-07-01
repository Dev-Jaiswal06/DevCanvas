import { Router } from "express";
import { register, login, logout, refreshToken, verifyEmail, forgotPassword, resetPassword } from "../controllers/authController.js";
import { validateRegister, validateLogin } from "../middleware/validate.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.post("/logout", protect, logout);
router.post("/refresh-token", refreshToken);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
