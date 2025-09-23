// app/api/users/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/users - Get all users
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT id, name, email, created_at FROM users');
    
    return NextResponse.json({
      success: true,
      users: rows
    });

  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST /api/users - Create new user
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email and password are required' },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password] // Note: You should hash the password in production
    );

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        userId: result.insertId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create user' },
      { status: 500 }
    );
  }
}