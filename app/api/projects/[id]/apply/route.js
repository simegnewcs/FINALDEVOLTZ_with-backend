import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request, { params }) {
  try {
    const { id } = params; // Consistent parameter name
    const { user_id, proposal } = await request.json();

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Check if user already applied
    const [existingApplications] = await pool.query(
      'SELECT id FROM applications WHERE project_id = ? AND user_id = ?',
      [id, user_id]
    );

    if (existingApplications.length > 0) {
      return NextResponse.json(
        { success: false, message: 'You have already applied to this project' },
        { status: 400 }
      );
    }

    // Insert application
    const [result] = await pool.execute(
      'INSERT INTO applications (project_id, user_id, proposal) VALUES (?, ?, ?)',
      [id, user_id, proposal || '']
    );

    // Update proposals count
    await pool.execute(
      'UPDATE projects SET proposals = proposals + 1 WHERE id = ?',
      [id]
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Applied to project successfully',
        applicationId: result.insertId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Apply for project error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to apply for project' },
      { status: 500 }
    );
  }
}