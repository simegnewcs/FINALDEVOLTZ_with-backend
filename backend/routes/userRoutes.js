import express from "express";
import { 
  getUsers, 
  createUser, 
  getFreelancers, 
  getFreelancerById, 
  updateUserProfile,
  getUserApplications,
  getFreelancersFromUsers 
} from "../controllers/userController.js";

const router = express.Router();

// General user routes
router.get("/", getUsers);           // GET /api/users
router.post("/", createUser);        // POST /api/users

// Freelancer-specific routes (using freelancers table)
router.get("/freelancers", getFreelancers);              // GET /api/users/freelancers
router.get("/freelancers/:id", getFreelancerById);       // GET /api/users/freelancers/:id

// Alternative freelancer route (using users table)
router.get("/freelancers-from-users", getFreelancersFromUsers); // GET /api/users/freelancers-from-users

// User profile routes
router.put("/:id", updateUserProfile);                   // PUT /api/users/:id
router.get("/:id/applications", getUserApplications);    // GET /api/users/:id/applications

export default router;