// import db from "../config/db.js";

// // @desc Get all Users
// export const getUsers = (req, res) => {
//     const q = "SELECT * FROM users";
//     db.query(q, (err, results) => {
//         if (err) return res.status(500).json({
//             error: err.message
//         });
//         res.json(results);
//     });
// };

// // @desc Create a new user
// export const createUser = (req, res) => {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//         return res.status(400).json({
//             message: "Please provide name, email and password"
//         });
//     }

//     const q = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//     db.query(q, [name, email, password], (err, results) => {
//         if (err) return res.status(500).json({
//             error: err.message
//         });
//         res.status(201).json({
//             message: "User created successfully",
//             userId: results.insertId
//         });
//     });
// }

// // ✅ Get all freelancers (UPDATED to use freelancers table)
// export const getFreelancers = (req, res) => {
//   const sql = `
//     SELECT
//       id,
//       name,
//       title,
//       rating,
//       reviews,
//       hourly_rate as hourlyRate,
//       skills,
//       location,
//       avatar,
//       description,
//       completed_projects as completedProjects,
//       response_time as responseTime,
//       languages,
//       availability
//     FROM freelancers
//     ORDER BY rating DESC, reviews DESC
//   `;

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Database error", error: err });
//     }
//     res.json(results);
//   });
// };

// // ✅ Get freelancer by ID
// export const getFreelancerById = (req, res) => {
//   const { id } = req.params;
  
//   const sql = `
//     SELECT
//       id,
//       name,
//       title,
//       rating,
//       reviews,
//       hourly_rate as hourlyRate,
//       skills,
//       location,
//       avatar,
//       description,
//       completed_projects as completedProjects,
//       response_time as responseTime,
//       languages,
//       availability
//     FROM freelancers
//     WHERE id = ?
//   `;
  
//   db.query(sql, [id], (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     if (results.length === 0) return res.status(404).json({ message: "Freelancer not found" });
//     res.json(results[0]);
//   });
// };

// // ✅ Update user profile
// export const updateUserProfile = (req, res) => {
//   const { id } = req.params;
//   const { name, skills, bio, hourly_rate, location, title } = req.body;

//   const sql = `
//     UPDATE users
//     SET name = ?, skills = ?, bio = ?, hourly_rate = ?, location = ?, title = ?
//     WHERE id = ?
//   `;
  
//   db.query(sql, [name, skills, bio, hourly_rate, location, title, id], (err, result) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     res.json({ message: "Profile updated successfully" });
//   });
// };

// // ✅ Get user applications
// export const getUserApplications = (req, res) => {
//   const { id } = req.params;
  
//   const sql = `
//     SELECT a.*, p.title as project_title, p.budget, p.status as project_status
//     FROM applications a
//     JOIN projects p ON a.project_id = p.id
//     WHERE a.user_id = ?
//     ORDER BY a.created_at DESC
//   `;
  
//   db.query(sql, [id], (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     res.json(results);
//   });
// };

// // ✅ Get freelancers from users table (alternative endpoint)
// export const getFreelancersFromUsers = (req, res) => {
//   const sql = `
//     SELECT
//       id,
//       name,
//       title,
//       rating,
//       reviews,
//       hourly_rate as hourlyRate,
//       skills,
//       location,
//       avatar,
//       bio as description,
//       completed_projects as completedProjects,
//       response_time as responseTime,
//       languages,
//       availability,
//       role
//     FROM users
//     WHERE role = 'freelancer' AND title IS NOT NULL
//     ORDER BY rating DESC, reviews DESC
//   `;

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Database error", error: err });
//     }
//     res.json(results);
//   });
// };





// backend/controllers/userController.js
import { getPool } from '../config/db.js';

// @desc Get all Users
export const getUsers = async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('getUsers error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// @desc Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email and password' });
    }

    const pool = getPool();
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );

    res.status(201).json({
      message: 'User created successfully',
      userId: result.insertId,
    });
  } catch (err) {
    console.error('createUser error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Get all freelancers (from freelancers table)
export const getFreelancers = async (req, res) => {
  const sql = `
    SELECT 
      id, 
      name, 
      title, 
      rating, 
      reviews, 
      hourly_rate as hourlyRate, 
      skills, 
      location, 
      avatar, 
      description, 
      completed_projects as completedProjects, 
      response_time as responseTime, 
      languages, 
      availability
    FROM freelancers 
    ORDER BY rating DESC, reviews DESC
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql);
    res.json(rows);
  } catch (err) {
    console.error('getFreelancers error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Get freelancer by ID
export const getFreelancerById = async (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT 
      id, 
      name, 
      title, 
      rating, 
      reviews, 
      hourly_rate as hourlyRate, 
      skills, 
      location, 
      avatar, 
      description, 
      completed_projects as completedProjects, 
      response_time as responseTime, 
      languages, 
      availability
    FROM freelancers 
    WHERE id = ?
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql, [id]);
    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: 'Freelancer not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('getFreelancerById error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Update user profile
export const updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const { name, skills, bio, hourly_rate, location, title } = req.body;

  const sql = `
    UPDATE users 
    SET name = ?, skills = ?, bio = ?, hourly_rate = ?, location = ?, title = ?
    WHERE id = ?
  `;
  try {
    const pool = getPool();
    await pool.execute(sql, [name, skills, bio, hourly_rate, location, title, id]);
    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('updateUserProfile error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Get user applications
export const getUserApplications = async (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT a.*, p.title as project_title, p.budget, p.status as project_status
    FROM applications a
    JOIN projects p ON a.project_id = p.id
    WHERE a.user_id = ?
    ORDER BY a.created_at DESC
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql, [id]);
    res.json(rows);
  } catch (err) {
    console.error('getUserApplications error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Get freelancers from users table (alternative endpoint)
export const getFreelancersFromUsers = async (req, res) => {
  const sql = `
    SELECT 
      id, 
      name, 
      title, 
      rating, 
      reviews, 
      hourly_rate as hourlyRate, 
      skills, 
      location, 
      avatar, 
      bio as description, 
      completed_projects as completedProjects, 
      response_time as responseTime, 
      languages, 
      availability,
      role
    FROM users 
    WHERE role = 'freelancer' AND title IS NOT NULL
    ORDER BY rating DESC, reviews DESC
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql);
    res.json(rows);
  } catch (err) {
    console.error('getFreelancersFromUsers error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};