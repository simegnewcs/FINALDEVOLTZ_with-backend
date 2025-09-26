// app/api/debug/connection/route.js
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    console.log('🔧 Environment variables check:', {
      DB_HOST: process.env.DB_HOST ? 'Set' : 'Missing',
      DB_USER: process.env.DB_USER ? 'Set' : 'Missing',
      DB_NAME: process.env.DB_NAME ? 'Set' : 'Missing',
      NODE_ENV: process.env.NODE_ENV
    });

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
      connectTimeout: 10000
    });

    const [rows] = await connection.execute('SELECT 1 as test');
    await connection.end();

    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      data: rows,
      env: {
        DB_HOST: process.env.DB_HOST ? 'Set' : 'Missing',
        DB_USER: process.env.DB_USER ? 'Set' : 'Missing',
        DB_NAME: process.env.DB_NAME ? 'Set' : 'Missing',
        NODE_ENV: process.env.NODE_ENV
      }
    });

  } catch (error) {
    console.error('❌ Connection error details:', {
      message: error.message,
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState,
      stack: error.stack
    });

    return NextResponse.json({
      success: false,
      error: {
        message: error.message,
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState
      },
      env: {
        DB_HOST: process.env.DB_HOST ? 'Set' : 'Missing',
        DB_USER: process.env.DB_USER ? 'Set' : 'Missing',
        DB_NAME: process.env.DB_NAME ? 'Set' : 'Missing',
        NODE_ENV: process.env.NODE_ENV
      },
      troubleshooting: [
        'Check if environment variables are set in Vercel',
        'Verify database user has remote access privileges',
        'Check if Hostinger allows connections from Vercel IPs',
        'Try different SSL settings'
      ]
    }, { status: 500 });
  }
}