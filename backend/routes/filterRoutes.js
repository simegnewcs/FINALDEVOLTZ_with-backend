import express from "express";
import { filterProjects, filterFreelancers } from "../controllers/filterController.js";

const router = express.Router();

// Filter routes
router.get("/projects", filterProjects);
router.get("/freelancers", filterFreelancers);

export default router;