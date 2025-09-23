// import db from "../config/db.js";

// // Filter projects
// export const filterProjects = (req, res) => {
//   const { minBudget, maxBudget, skills, timePosted, sortBy } = req.query;
  
//   let sql = `
//     SELECT p.*, u.name as client_name, u.email as client_email
//     FROM projects p
//     JOIN users u ON p.client_id = u.id
//     WHERE p.status = 'open'
//   `;
  
//   const params = [];
  
//   // Budget filter
//   if (minBudget) {
//     sql += " AND REPLACE(REPLACE(p.budget, '$', ''), ',', '') >= ?";
//     params.push(minBudget);
//   }
  
//   if (maxBudget) {
//     sql += " AND REPLACE(REPLACE(p.budget, '$', ''), ',', '') <= ?";
//     params.push(maxBudget);
//   }
  
//   // Skills filter
//   if (skills) {
//     const skillsArray = skills.split(',').map(skill => skill.trim());
//     skillsArray.forEach((skill, index) => {
//       if (index === 0) {
//         sql += " AND (p.skills LIKE ?";
//       } else {
//         sql += " OR p.skills LIKE ?";
//       }
//       params.push(`%${skill}%`);
//     });
//     sql += ")";
//   }
  
//   // Time posted filter
//   if (timePosted) {
//     const now = new Date();
//     let dateFilter;
    
//     switch (timePosted) {
//       case '24h':
//         dateFilter = new Date(now.setDate(now.getDate() - 1));
//         break;
//       case '3d':
//         dateFilter = new Date(now.setDate(now.getDate() - 3));
//         break;
//       case '7d':
//         dateFilter = new Date(now.setDate(now.getDate() - 7));
//         break;
//       case '30d':
//         dateFilter = new Date(now.setDate(now.getDate() - 30));
//         break;
//       default:
//         dateFilter = null;
//     }
    
//     if (dateFilter) {
//       sql += " AND p.created_at >= ?";
//       params.push(dateFilter.toISOString().slice(0, 19).replace('T', ' '));
//     }
//   }
  
//   // Sorting
//   switch (sortBy) {
//     case 'newest':
//       sql += " ORDER BY p.created_at DESC";
//       break;
//     case 'oldest':
//       sql += " ORDER BY p.created_at ASC";
//       break;
//     case 'budget_high':
//       sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) DESC";
//       break;
//     case 'budget_low':
//       sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) ASC";
//       break;
//     default:
//       sql += " ORDER BY p.created_at DESC";
//   }
  
//   db.query(sql, params, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Database error", error: err });
//     }
//     res.json(results);
//   });
// };

// // Filter freelancers
// export const filterFreelancers = (req, res) => {
//   const { minRate, maxRate, skills, availability, skillLevel, sortBy } = req.query;
  
//   let sql = `
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
//     WHERE 1=1
//   `;
  
//   const params = [];
  
//   // Hourly rate filter
//   if (minRate) {
//     sql += " AND hourly_rate >= ?";
//     params.push(minRate);
//   }
  
//   if (maxRate) {
//     sql += " AND hourly_rate <= ?";
//     params.push(maxRate);
//   }
  
//   // Skills filter
//   if (skills) {
//     const skillsArray = skills.split(',').map(skill => skill.trim());
//     skillsArray.forEach((skill, index) => {
//       if (index === 0) {
//         sql += " AND (skills LIKE ?";
//       } else {
//         sql += " OR skills LIKE ?";
//       }
//       params.push(`%${skill}%`);
//     });
//     sql += ")";
//   }
  
//   // Availability filter
//   if (availability) {
//     sql += " AND availability = ?";
//     params.push(availability);
//   }
  
//   // Skill level filter (based on completed projects)
//   if (skillLevel) {
//     switch (skillLevel) {
//       case 'beginner':
//         sql += " AND completed_projects < 10";
//         break;
//       case 'intermediate':
//         sql += " AND completed_projects >= 10 AND completed_projects < 50";
//         break;
//       case 'expert':
//         sql += " AND completed_projects >= 50";
//         break;
//     }
//   }
  
//   // Sorting
//   switch (sortBy) {
//     case 'rating_high':
//       sql += " ORDER BY rating DESC";
//       break;
//     case 'rating_low':
//       sql += " ORDER BY rating ASC";
//       break;
//     case 'rate_high':
//       sql += " ORDER BY hourly_rate DESC";
//       break;
//     case 'rate_low':
//       sql += " ORDER BY hourly_rate ASC";
//       break;
//     case 'projects_high':
//       sql += " ORDER BY completed_projects DESC";
//       break;
//     default:
//       sql += " ORDER BY rating DESC";
//   }
  
//   db.query(sql, params, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Database error", error: err });
//     }
//     res.json(results);
//   });
// };



// backend/controllers/filterController.js
import { getPool } from '../config/db.js';

// Filter projects
export const filterProjects = async (req, res) => {
  try {
    const { minBudget, maxBudget, skills, timePosted, sortBy } = req.query;
    const pool = getPool();

    let sql = `
      SELECT p.*, u.name as client_name, u.email as client_email 
      FROM projects p 
      JOIN users u ON p.client_id = u.id 
      WHERE p.status = 'open'
    `;
    const params = [];

    // Budget filter
    if (minBudget) {
      sql += " AND REPLACE(REPLACE(p.budget, '$', ''), ',', '') >= ?";
      params.push(minBudget);
    }
    if (maxBudget) {
      sql += " AND REPLACE(REPLACE(p.budget, '$', ''), ',', '') <= ?";
      params.push(maxBudget);
    }

    // Skills filter
    if (skills) {
      const skillsArray = String(skills).split(',').map((s) => s.trim()).filter(Boolean);
      if (skillsArray.length) {
        sql += ' AND (';
        skillsArray.forEach((skill, idx) => {
          sql += idx === 0 ? 'p.skills LIKE ?' : ' OR p.skills LIKE ?';
          params.push(`%${skill}%`);
        });
        sql += ')';
      }
    }

    // Time posted filter
    if (timePosted) {
      const now = new Date();
      let dateFilter = null;
      switch (timePosted) {
        case '24h':
          dateFilter = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          break;
        case '3d':
          dateFilter = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
          break;
        case '7d':
          dateFilter = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case '30d':
          dateFilter = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        default:
          dateFilter = null;
      }
      if (dateFilter) {
        sql += ' AND p.created_at >= ?';
        params.push(dateFilter.toISOString().slice(0, 19).replace('T', ' '));
      }
    }

    // Sorting
    switch (sortBy) {
      case 'newest':
        sql += ' ORDER BY p.created_at DESC';
        break;
      case 'oldest':
        sql += ' ORDER BY p.created_at ASC';
        break;
      case 'budget_high':
        sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) DESC";
        break;
      case 'budget_low':
        sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) ASC";
        break;
      default:
        sql += ' ORDER BY p.created_at DESC';
    }

    const [results] = await pool.query(sql, params);
    res.json(results);
  } catch (err) {
    console.error('filterProjects error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};

// Filter freelancers
export const filterFreelancers = async (req, res) => {
  try {
    const { minRate, maxRate, skills, availability, skillLevel, sortBy } = req.query;
    const pool = getPool();

    let sql = `
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
      WHERE 1=1
    `;
    const params = [];

    // Hourly rate filter
    if (minRate) {
      sql += ' AND hourly_rate >= ?';
      params.push(minRate);
    }
    if (maxRate) {
      sql += ' AND hourly_rate <= ?';
      params.push(maxRate);
    }

    // Skills filter
    if (skills) {
      const skillsArray = String(skills).split(',').map((s) => s.trim()).filter(Boolean);
      if (skillsArray.length) {
        sql += ' AND (';
        skillsArray.forEach((skill, idx) => {
          sql += idx === 0 ? 'skills LIKE ?' : ' OR skills LIKE ?';
          params.push(`%${skill}%`);
        });
        sql += ')';
      }
    }

    // Availability
    if (availability) {
      sql += ' AND availability = ?';
      params.push(availability);
    }

    // Skill level (by completed projects)
    if (skillLevel) {
      switch (skillLevel) {
        case 'beginner':
          sql += ' AND completed_projects < 10';
          break;
        case 'intermediate':
          sql += ' AND completed_projects >= 10 AND completed_projects < 50';
          break;
        case 'expert':
          sql += ' AND completed_projects >= 50';
          break;
      }
    }

    // Sorting
    switch (sortBy) {
      case 'rating_high':
        sql += ' ORDER BY rating DESC';
        break;
      case 'rating_low':
        sql += ' ORDER BY rating ASC';
        break;
      case 'rate_high':
        sql += ' ORDER BY hourly_rate DESC';
        break;
      case 'rate_low':
        sql += ' ORDER BY hourly_rate ASC';
        break;
      case 'projects_high':
        sql += ' ORDER BY completed_projects DESC';
        break;
      default:
        sql += ' ORDER BY rating DESC';
    }

    const [results] = await pool.query(sql, params);
    res.json(results);
  } catch (err) {
    console.error('filterFreelancers error:', err);
    res.status(500).json({ message: 'Database error', error: err });
  }
};