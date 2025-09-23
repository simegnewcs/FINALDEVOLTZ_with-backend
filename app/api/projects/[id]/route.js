// app/api/projects/[id]/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/projects/[id] - Get project by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const sql = `
      SELECT p.*, u.name as client_name, u.email as client_email 
      FROM projects p 
      JOIN users u ON p.client_id = u.id 
      WHERE p.id = ?
    `;

    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      project: rows[0]
    });

  } catch (error) {
    console.error('Get project by ID error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}