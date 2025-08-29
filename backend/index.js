import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";            // initializes DB and logs connection
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // ADD THIS IMPORT

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Add this before your auth routes
app.get("/api/auth/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes); // ADD THIS LINE

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
console.log("✅ Backend server is running...");