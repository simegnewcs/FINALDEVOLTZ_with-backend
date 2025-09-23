// app/api/users/freelancers/[id]/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const sql = `
      SELECT 
        id, name, title, rating, reviews, 
        hourly_rate as hourlyRate, skills, location, 
        avatar, description, completed_projects as completedProjects, 
        response_time as responseTime, languages, availability
      FROM freelancers 
      WHERE id = ?
    `;

    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Freelancer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      freelancer: rows[0]
    });

  } catch (error) {
    console.error('Get freelancer by ID error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch freelancer' },
      { status: 500 }
    );
  }
}