// import db from "../config/db.js";

// // ✅ Create new project
// export const createProject = (req, res) => {
//   const { title, description, budget, deadline, skills, client_id, duration, location } = req.body;

//   if (!title || !description || !budget || !deadline || !skills || !client_id) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const sql =
//     "INSERT INTO projects (title, description, budget, deadline, skills, client_id, duration, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//   db.query(sql, [title, description, budget, deadline, skills, client_id, duration || 'Not specified', location || 'Remote'], (err, result) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     res
//       .status(201)
//       .json({ message: "Project created successfully", projectId: result.insertId });
//   });
// };

// // ✅ Get all projects (with client details)
// export const getProjects = (req, res) => {
//   const sql = `
//     SELECT p.*, u.name as client_name, u.email as client_email
//     FROM projects p
//     JOIN users u ON p.client_id = u.id
//     WHERE p.status = 'open'
//     ORDER BY p.created_at DESC
//   `;

//   db.query(sql, (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     res.json(results);
//   });
// };

// // ✅ Get project by ID
// export const getProjectById = (req, res) => {
//   const { id } = req.params;
  
//   const sql = `
//     SELECT p.*, u.name as client_name, u.email as client_email
//     FROM projects p
//     JOIN users u ON p.client_id = u.id
//     WHERE p.id = ?
//   `;
  
//   db.query(sql, [id], (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
//     if (results.length === 0) return res.status(404).json({ message: "Project not found" });
//     res.json(results[0]);
//   });
// };

// // ✅ Apply to a project
// export const applyForProject = (req, res) => {
//   const { project_id, user_id, proposal } = req.body;

//   if (!project_id || !user_id) {
//     return res.status(400).json({ message: "Project ID and User ID are required" });
//   }

//   // First check if user already applied
//   const checkSql = "SELECT * FROM applications WHERE project_id = ? AND user_id = ?";
//   db.query(checkSql, [project_id, user_id], (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
    
//     if (results.length > 0) {
//       return res.status(400).json({ message: "You have already applied to this project" });
//     }

//     const insertSql =
//       "INSERT INTO applications (project_id, user_id, proposal) VALUES (?, ?, ?)";
//     db.query(insertSql, [project_id, user_id, proposal || ''], (err, result) => {
//       if (err) return res.status(500).json({ message: "Database error", error: err });
      
//       // Update proposals count
//       const updateSql = "UPDATE projects SET proposals = proposals + 1 WHERE id = ?";
//       db.query(updateSql, [project_id], (err) => {
//         if (err) console.error("Error updating proposals count:", err);
//       });
      
//       res.status(201).json({
//         message: "Applied to project successfully",
//         applicationId: result.insertId,
//       });
//     });
//   });
// };

// // ✅ Hire a freelancer for a project
// // export const hireFreelancer = (req, res) => {
// //   const { projectId } = req.params;
// //   const { freelancerId } = req.body;

// //   if (!projectId || !freelancerId) {
// //     return res.status(400).json({ message: "Project ID and Freelancer ID are required" });
// //   }

// //   const sql = "UPDATE applications SET status = 'hired' WHERE project_id = ? AND user_id = ?";
// //   db.query(sql, [projectId, freelancerId], (err, result) => {
// //     if (err) return res.status(500).json({ message: "Database error", error: err });
    
// //     // Update project status
// //     const updateSql = "UPDATE projects SET status = 'in_progress' WHERE id = ?";
// //     db.query(updateSql, [projectId], (err) => {
// //       if (err) console.error("Error updating project status:", err);
// //     });
    
// //     res.status(200).json({ message: "Freelancer hired successfully" });
// //   });
// // };


// // Add this new function for hiring validation
// export const validateHireRequest = (req, res, next) => {
//   const { freelancerId } = req.body;
//   const clientId = req.user?.id; // Assuming you have user authentication

//   if (!clientId) {
//     return res.status(401).json({ message: "Authentication required" });
//   }

//   // Check if user is a client
//   const checkClientSql = "SELECT role FROM users WHERE id = ?";
//   db.query(checkClientSql, [clientId], (err, results) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
    
//     if (results.length === 0 || results[0].role !== 'client') {
//       return res.status(403).json({ message: "Only clients can hire freelancers" });
//     }
    
//     // Check if freelancer exists
//     const checkFreelancerSql = "SELECT id FROM users WHERE id = ? AND role = 'freelancer'";
//     db.query(checkFreelancerSql, [freelancerId], (err, freelancerResults) => {
//       if (err) return res.status(500).json({ message: "Database error", error: err });
      
//       if (freelancerResults.length === 0) {
//         return res.status(404).json({ message: "Freelancer not found" });
//       }
      
//       next(); // Proceed to hire function
//     });
//   });
// };

// // Update the hireFreelancer function to use validation
// export const hireFreelancer = (req, res) => {
//   const { projectId } = req.params;
//   const { freelancerId } = req.body;

//   if (!projectId || !freelancerId) {
//     return res.status(400).json({ message: "Project ID and Freelancer ID are required" });
//   }

//   const sql = "UPDATE applications SET status = 'hired' WHERE project_id = ? AND user_id = ?";
//   db.query(sql, [projectId, freelancerId], (err, result) => {
//     if (err) return res.status(500).json({ message: "Database error", error: err });
    
//     // Update project status
//     const updateSql = "UPDATE projects SET status = 'in_progress' WHERE id = ?";
//     db.query(updateSql, [projectId], (err) => {
//       if (err) console.error("Error updating project status:", err);
//     });
    
//     // Create a notification for the freelancer
//     const notificationSql = "INSERT INTO notifications (user_id, message, type) VALUES (?, ?, ?)";
//     const notificationMessage = `You've been hired for project #${projectId}!`;
//     db.query(notificationSql, [freelancerId, notificationMessage, 'hire'], (err) => {
//       if (err) console.error("Error creating notification:", err);
//     });
    
//     res.status(200).json({ message: "Freelancer hired successfully" });
//   });
// };





// backend/controllers/projectController.js
import { getPool } from '../config/db.js';

// ✅ Create new project
export const createProject = async (req, res) => {
  try {
    const { title, description, budget, deadline, skills, client_id, duration, location } = req.body;

    if (!title || !description || !budget || !deadline || !skills || !client_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = `
      INSERT INTO projects (title, description, budget, deadline, skills, client_id, duration, location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const pool = getPool();
    const [result] = await pool.execute(sql, [
      title,
      description,
      budget,
      deadline,
      skills,
      client_id,
      duration || 'Not specified',
      location || 'Remote',
    ]);

    res.status(201).json({ message: 'Project created successfully', projectId: result.insertId });
  } catch (err) {
    console.error('createProject error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Get all projects (with client details)
export const getProjects = async (req, res) => {
  const sql = `
    SELECT p.*, u.name as client_name, u.email as client_email 
    FROM projects p 
    JOIN users u ON p.client_id = u.id 
    WHERE p.status = 'open'
    ORDER BY p.created_at DESC
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql);
    res.json(rows);
  } catch (err) {
    console.error('getProjects error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Get project by ID
export const getProjectById = async (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT p.*, u.name as client_name, u.email as client_email 
    FROM projects p 
    JOIN users u ON p.client_id = u.id 
    WHERE p.id = ?
  `;
  try {
    const pool = getPool();
    const [rows] = await pool.query(sql, [id]);
    if (!rows.length) return res.status(404).json({ message: 'Project not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('getProjectById error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Apply to a project
export const applyForProject = async (req, res) => {
  try {
    const { project_id, user_id, proposal } = req.body;

    if (!project_id || !user_id) {
      return res.status(400).json({ message: 'Project ID and User ID are required' });
    }

    const pool = getPool();

    // Check duplicate application
    const checkSql = 'SELECT 1 FROM applications WHERE project_id = ? AND user_id = ? LIMIT 1';
    const [exists] = await pool.query(checkSql, [project_id, user_id]);
    if (exists.length > 0) {
      return res.status(400).json({ message: 'You have already applied to this project' });
    }

    // Insert application
    const insertSql = 'INSERT INTO applications (project_id, user_id, proposal) VALUES (?, ?, ?)';
    const [result] = await pool.execute(insertSql, [project_id, user_id, proposal || '']);

    // Update proposals count (fire-and-forget)
    const updateSql = 'UPDATE projects SET proposals = proposals + 1 WHERE id = ?';
    pool.execute(updateSql, [project_id]).catch((e) =>
      console.error('Error updating proposals count:', e)
    );

    res.status(201).json({
      message: 'Applied to project successfully',
      applicationId: result.insertId,
    });
  } catch (err) {
    console.error('applyForProject error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Validate hire request (middleware)
export const validateHireRequest = async (req, res, next) => {
  try {
    const { freelancerId } = req.body;
    const clientId = req.user?.id;

    if (!clientId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const pool = getPool();

    // Check client role
    const [clientRows] = await pool.query('SELECT role FROM users WHERE id = ?', [clientId]);
    if (!clientRows.length || clientRows[0].role !== 'client') {
      return res.status(403).json({ message: 'Only clients can hire freelancers' });
    }

    // Check freelancer exists
    const [freelancerRows] = await pool.query(
      "SELECT id FROM users WHERE id = ? AND role = 'freelancer'",
      [freelancerId]
    );
    if (!freelancerRows.length) {
      return res.status(404).json({ message: 'Freelancer not found' });
    }

    return next();
  } catch (err) {
    console.error('validateHireRequest error:', err);
    return res.status(500).json({ message: 'Database error', error: err });
  }
};

// ✅ Hire a freelancer for a project
export const hireFreelancer = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { freelancerId } = req.body;

    if (!projectId || !freelancerId) {
      return res.status(400).json({ message: 'Project ID and Freelancer ID are required' });
    }

    const pool = getPool();

    // Mark application hired
    const sql = 'UPDATE applications SET status = "hired" WHERE project_id = ? AND user_id = ?';
    await pool.execute(sql, [projectId, freelancerId]);

    // Update project status
    const updateSql = 'UPDATE projects SET status = "in_progress" WHERE id = ?';
    await pool.execute(updateSql, [projectId]);

    // Create a notification (fire-and-forget)
    const notificationSql =
      'INSERT INTO notifications (user_id, message, type) VALUES (?, ?, ?)';
    const notificationMessage = `You have been hired for project #${projectId}!`;
    pool.execute(notificationSql, [freelancerId, notificationMessage, 'hire']).catch((e) =>
      console.error('Error creating notification:', e)
    );

    res.status(200).json({ message: 'Freelancer hired successfully' });
  } catch (err) {
    console.error('hireFreelancer error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};