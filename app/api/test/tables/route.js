// app/api/test/tables/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Check what tables exist in the database
    const [tables] = await pool.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = ?
    `, [process.env.DB_NAME]);

    // Check if our expected tables exist
    const expectedTables = ['users', 'projects', 'freelancers', 'applications'];
    const existingTables = tables.map(table => table.TABLE_NAME);
    
    const tableStatus = expectedTables.map(table => ({
      table,
      exists: existingTables.includes(table),
      actualName: existingTables.find(t => t.toLowerCase().includes(table.toLowerCase())) || 'Not found'
    }));

    return NextResponse.json({
      success: true,
      allTables: existingTables,
      expectedTables: tableStatus,
      database: process.env.DB_NAME
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      tablesError: true
    }, { status: 500 });
  }
}