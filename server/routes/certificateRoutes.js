import { Router } from "express";
import { generateCertificate, getCertificates, verifyCertificate } from "../controllers/certificateController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/generate", protect, generateCertificate);
router.get("/", protect, getCertificates);
router.get("/verify/:id", verifyCertificate);

export default router;
