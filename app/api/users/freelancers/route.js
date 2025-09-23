// app/api/users/freelancers/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/users/freelancers - Get all freelancers
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const offset = (page - 1) * limit;

    const sql = `
      SELECT 
        id, name, title, rating, reviews, 
        hourly_rate as hourlyRate, skills, location, 
        avatar, description, completed_projects as completedProjects, 
        response_time as responseTime, languages, availability
      FROM freelancers 
      ORDER BY rating DESC, reviews DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(sql, [limit, offset]);
    
    const [countRows] = await pool.query('SELECT COUNT(*) as total FROM freelancers');

    return NextResponse.json({
      success: true,
      freelancers: rows,
      pagination: {
        page,
        limit,
        total: countRows[0].total,
        totalPages: Math.ceil(countRows[0].total / limit)
      }
    });

  } catch (error) {
    console.error('Get freelancers error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch freelancers' },
      { status: 500 }
    );
  }
}