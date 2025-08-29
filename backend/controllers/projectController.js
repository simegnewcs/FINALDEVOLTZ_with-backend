import db from "../config/db.js";

// ✅ Create new project
export const createProject = (req, res) => {
  const { title, description, budget, deadline, skills, client_id, duration, location } = req.body;

  if (!title || !description || !budget || !deadline || !skills || !client_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "INSERT INTO projects (title, description, budget, deadline, skills, client_id, duration, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [title, description, budget, deadline, skills, client_id, duration || 'Not specified', location || 'Remote'], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res
      .status(201)
      .json({ message: "Project created successfully", projectId: result.insertId });
  });
};

// ✅ Get all projects (with client details)
export const getProjects = (req, res) => {
  const sql = `
    SELECT p.*, u.name as client_name, u.email as client_email 
    FROM projects p 
    JOIN users u ON p.client_id = u.id 
    WHERE p.status = 'open'
    ORDER BY p.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json(results);
  });
};

// ✅ Get project by ID
export const getProjectById = (req, res) => {
  const { id } = req.params;
  
  const sql = `
    SELECT p.*, u.name as client_name, u.email as client_email 
    FROM projects p 
    JOIN users u ON p.client_id = u.id 
    WHERE p.id = ?
  `;
  
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    if (results.length === 0) return res.status(404).json({ message: "Project not found" });
    res.json(results[0]);
  });
};

// ✅ Apply to a project
export const applyForProject = (req, res) => {
  const { project_id, user_id, proposal } = req.body;

  if (!project_id || !user_id) {
    return res.status(400).json({ message: "Project ID and User ID are required" });
  }

  // First check if user already applied
  const checkSql = "SELECT * FROM applications WHERE project_id = ? AND user_id = ?";
  db.query(checkSql, [project_id, user_id], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    
    if (results.length > 0) {
      return res.status(400).json({ message: "You have already applied to this project" });
    }

    const insertSql =
      "INSERT INTO applications (project_id, user_id, proposal) VALUES (?, ?, ?)";
    db.query(insertSql, [project_id, user_id, proposal || ''], (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });
      
      // Update proposals count
      const updateSql = "UPDATE projects SET proposals = proposals + 1 WHERE id = ?";
      db.query(updateSql, [project_id], (err) => {
        if (err) console.error("Error updating proposals count:", err);
      });
      
      res.status(201).json({
        message: "Applied to project successfully",
        applicationId: result.insertId,
      });
    });
  });
};

// ✅ Hire a freelancer for a project
export const hireFreelancer = (req, res) => {
  const { projectId } = req.params;
  const { freelancerId } = req.body;

  if (!projectId || !freelancerId) {
    return res.status(400).json({ message: "Project ID and Freelancer ID are required" });
  }

  const sql = "UPDATE applications SET status = 'hired' WHERE project_id = ? AND user_id = ?";
  db.query(sql, [projectId, freelancerId], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    
    // Update project status
    const updateSql = "UPDATE projects SET status = 'in_progress' WHERE id = ?";
    db.query(updateSql, [projectId], (err) => {
      if (err) console.error("Error updating project status:", err);
    });
    
    res.status(200).json({ message: "Freelancer hired successfully" });
  });
};


