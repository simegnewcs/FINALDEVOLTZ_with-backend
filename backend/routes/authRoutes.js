import express from "express";
import { login, register, me } from "../controllers/authController.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register); // POST /api/auth/register
router.post("/login", login);       // POST /api/auth/login
router.get("/me", requireAuth, me); // GET  /api/auth/me

export default router;
