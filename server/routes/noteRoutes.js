import { Router } from "express";
import { getNotes, createNote, updateNote, deleteNote, searchNotes } from "../controllers/noteController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.get("/", protect, getNotes);
router.get("/search", protect, searchNotes);
router.post("/", protect, createNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);

export default router;
