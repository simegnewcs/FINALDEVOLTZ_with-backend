// app/api/auth/health/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Test database connection
    await pool.query('SELECT 1');
    
    return NextResponse.json({
      status: 'healthy',
      message: 'Authentication API is working correctly',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        message: 'Database connection failed',
        error: error.message
      },
      { status: 503 }
    );
  }
}