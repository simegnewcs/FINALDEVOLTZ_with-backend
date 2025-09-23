// app/api/test/db/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Test connection
    const connection = await pool.getConnection();
    
    // Test simple query
    const [rows] = await connection.execute('SELECT 1 as test_value');
    
    connection.release();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      data: rows,
      connection: {
        host: process.env.DB_HOST ? 'Set' : 'Missing',
        user: process.env.DB_USER ? 'Set' : 'Missing',
        database: process.env.DB_NAME ? 'Set' : 'Missing'
      }
    });
    
  } catch (error) {
    console.error('Database test error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
      errorCode: error.code,
      env: {
        DB_HOST: process.env.DB_HOST ? 'Set' : 'Missing',
        DB_USER: process.env.DB_USER ? 'Set' : 'Missing',
        DB_NAME: process.env.DB_NAME ? 'Set' : 'Missing',
        NODE_ENV: process.env.NODE_ENV
      }
    }, { status: 500 });
  }
}