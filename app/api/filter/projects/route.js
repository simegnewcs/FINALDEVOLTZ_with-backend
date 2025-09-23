// app/api/filter/projects/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const minBudget = searchParams.get('minBudget');
    const maxBudget = searchParams.get('maxBudget');
    const skills = searchParams.get('skills');
    const timePosted = searchParams.get('timePosted');
    const sortBy = searchParams.get('sortBy') || 'newest';

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
      const skillsArray = skills.split(',').map(skill => skill.trim());
      if (skillsArray.length > 0) {
        sql += " AND (";
        skillsArray.forEach((skill, index) => {
          if (index > 0) sql += " OR ";
          sql += "p.skills LIKE ?";
          params.push(`%${skill}%`);
        });
        sql += ")";
      }
    }

    // Time posted filter
    if (timePosted) {
      const now = new Date();
      let dateFilter;

      switch (timePosted) {
        case '24h': dateFilter = new Date(now.setDate(now.getDate() - 1)); break;
        case '3d': dateFilter = new Date(now.setDate(now.getDate() - 3)); break;
        case '7d': dateFilter = new Date(now.setDate(now.getDate() - 7)); break;
        case '30d': dateFilter = new Date(now.setDate(now.getDate() - 30)); break;
      }

      if (dateFilter) {
        sql += " AND p.created_at >= ?";
        params.push(dateFilter.toISOString().slice(0, 19).replace('T', ' '));
      }
    }

    // Sorting
    switch (sortBy) {
      case 'newest': sql += " ORDER BY p.created_at DESC"; break;
      case 'oldest': sql += " ORDER BY p.created_at ASC"; break;
      case 'budget_high': sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) DESC"; break;
      case 'budget_low': sql += " ORDER BY CAST(REPLACE(REPLACE(p.budget, '$', ''), ',', '') AS UNSIGNED) ASC"; break;
      default: sql += " ORDER BY p.created_at DESC";
    }

    const [results] = await pool.query(sql, params);

    return NextResponse.json({
      success: true,
      projects: results,
      filters: { minBudget, maxBudget, skills, timePosted, sortBy }
    });

  } catch (error) {
    console.error('Filter projects error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to filter projects' },
      { status: 500 }
    );
  }
}