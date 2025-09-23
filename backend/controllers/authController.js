// import db from "../config/db.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const signToken = (user) => {
//   return jwt.sign(
//     { id: user.id, email: user.email, name: user.name },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// export const register = (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name?.trim() || !email?.trim() || !password?.trim()) {
//     return res.status(400).json({ error: "Name, email, and password are required" });
//   }

//   db.query("SELECT id FROM users WHERE email = ?", [email], async (err, rows) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (rows.length) return res.status(409).json({ error: "Email already in use" });

//     // Use a different variable name for the hashed password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     db.query(
//       "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", // Changed to 'password'
//       [name, email, hashedPassword],
//       (err2, result) => {
//         if (err2) return res.status(500).json({ error: err2.message });

//         const user = { id: result.insertId, name, email };
//         const token = signToken(user);
//         return res.status(201).json({ user, token });
//       }
//     );
//   });
// };

// export const login = (req, res) => {
//   const { email, password } = req.body;

//   if (!email?.trim() || !password?.trim()) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   db.query("SELECT * FROM users WHERE email = ?", [email], async (err, rows) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (!rows.length) return res.status(401).json({ error: "Invalid credentials" });

//     const user = rows[0];
//     // Compare with the 'password' column
//     const passwordMatch = await bcrypt.compare(password, user.password);
    
//     if (!passwordMatch) return res.status(401).json({ error: "Invalid credentials" });

//     const payload = { id: user.id, name: user.name, email: user.email };
//     const token = signToken(payload);
//     return res.json({ user: payload, token });
//   });
// };

// export const me = (req, res) => {
//   // req.user comes from auth middleware
//   res.json({ user: req.user });
// };

// backend/controllers/authController.js
import { getPool } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const register = async (req, res) => {
  try {
    const name = req.body?.name?.trim();
    const email = req.body?.email?.trim()?.toLowerCase();
    const password = req.body?.password?.trim();

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const pool = getPool();

    // Check existing user
    const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (rows.length) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    const user = { id: result.insertId, name, email };
    const token = signToken(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    console.error('register error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const email = req.body?.email?.trim()?.toLowerCase();
    const password = req.body?.password?.trim();

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT id, name, email, password FROM users WHERE email = ?',
      [email]
    );
    if (!rows.length) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const payload = { id: user.id, name: user.name, email: user.email };
    const token = signToken(payload);
    return res.json({ user: payload, token });
  } catch (err) {
    console.error('login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const me = (req, res) => {
  // req.user should be set by your auth middleware
  res.json({ user: req.user });
};