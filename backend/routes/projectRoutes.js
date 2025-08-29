import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  applyForProject,
  hireFreelancer,
} from "../controllers/projectController.js";

const router = express.Router();

// POST a new project
router.post("/", createProject);

// GET all projects
router.get("/", getProjects);

// GET project by ID
router.get("/:id", getProjectById);

// POST apply to a project
router.post("/:projectId/apply", applyForProject);

// POST hire a freelancer for a project
router.post("/:projectId/hire", hireFreelancer);


export default router;