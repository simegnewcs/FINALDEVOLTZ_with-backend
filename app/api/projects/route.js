// app/api/projects/route.js - CORRECTED VERSION
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/projects - Get all projects
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const offset = (page - 1) * limit;

    const sql = `
      SELECT p.*, u.name as client_name, u.email as client_email 
      FROM projects p 
      JOIN users u ON p.client_id = u.id 
      WHERE p.status = 'open'
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(sql, [limit, offset]);
    
    // Get total count for pagination
    const [countRows] = await pool.query(
      'SELECT COUNT(*) as total FROM projects WHERE status = "open"'
    );

    return NextResponse.json({
      success: true,
      projects: rows,
      pagination: {
        page,
        limit,
        total: countRows[0].total,
        totalPages: Math.ceil(countRows[0].total / limit)
      }
    });

  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch projects',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create new project
export async function POST(request) {
  try {
    const { title, description, budget, deadline, skills, client_id, duration, location } = await request.json();

    if (!title || !description || !budget || !deadline || !skills || !client_id) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO projects (title, description, budget, deadline, skills, client_id, duration, location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Project created successfully', 
        projectId: result.insertId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create project' },
      { status: 500 }
    );
  }
}