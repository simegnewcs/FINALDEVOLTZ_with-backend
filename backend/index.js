// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import "./config/db.js";            // initializes DB and logs connection
// import authRoutes from "./routes/authRoutes.js";
// import projectRoutes from "./routes/projectRoutes.js";
// import userRoutes from "./routes/userRoutes.js"; // ADD THIS IMPORT
// import filterRoutes from "./routes/filterRoutes.js"; // Add this line

// dotenv.config();
// const app = express();

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(express.json());

// // Add this before your auth routes
// app.get("/api/auth/health", (req, res) => {
//   res.status(200).json({ status: "OK", message: "Server is running" });
// });

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/users", userRoutes); // ADD THIS LINE
// app.use("/api/filter", filterRoutes); // Add this line

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// console.log("✅ Backend server is running...");




// backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/db.js'; // We'll refactor this to pooling in Step 3
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import userRoutes from './routes/userRoutes.js';
import filterRoutes from './routes/filterRoutes.js';

dotenv.config();

const app = express();

// Allow localhost during dev and your deployed Vercel domain in prod
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.NEXT_PUBLIC_SITE_URL, // e.g. https://your-app.vercel.app
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // Same-origin or server-to-server requests (no Origin header)
      if (!origin) return cb(null, true);
      const ok = allowedOrigins.includes(origin);
      cb(ok ? null : new Error('Not allowed by CORS'), ok);
    },
    credentials: true,
  })
);

app.use(express.json());

// Healthcheck
app.get('/api/auth/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/auth/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Alias for old path
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/filter', filterRoutes);

// Only listen locally. On Vercel, the function runner calls the app directly.
const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
  console.log('✅ Backend server is running...');
}

export default app;