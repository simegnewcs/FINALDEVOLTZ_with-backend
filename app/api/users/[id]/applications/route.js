import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const sql = `
      SELECT a.*, p.title as project_title, p.budget, p.status as project_status
      FROM applications a
      JOIN projects p ON a.project_id = p.id
      WHERE a.user_id = ?
      ORDER BY a.created_at DESC
    `;

    const [rows] = await pool.query(sql, [id]);

    return NextResponse.json({
      success: true,
      applications: rows
    });

  } catch (error) {
    console.error('Get user applications error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}