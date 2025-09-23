// app/api/filter/freelancers/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const minRate = searchParams.get('minRate');
    const maxRate = searchParams.get('maxRate');
    const skills = searchParams.get('skills');
    const availability = searchParams.get('availability');
    const skillLevel = searchParams.get('skillLevel');
    const sortBy = searchParams.get('sortBy') || 'rating_high';

    let sql = `
      SELECT 
        id, name, title, rating, reviews, 
        hourly_rate as hourlyRate, skills, location, 
        avatar, description, completed_projects as completedProjects, 
        response_time as responseTime, languages, availability
      FROM freelancers 
      WHERE 1=1
    `;
    const params = [];

    // Hourly rate filter
    if (minRate) {
      sql += " AND hourly_rate >= ?";
      params.push(minRate);
    }
    if (maxRate) {
      sql += " AND hourly_rate <= ?";
      params.push(maxRate);
    }

    // Skills filter
    if (skills) {
      const skillsArray = skills.split(',').map(skill => skill.trim());
      if (skillsArray.length > 0) {
        sql += " AND (";
        skillsArray.forEach((skill, index) => {
          if (index > 0) sql += " OR ";
          sql += "skills LIKE ?";
          params.push(`%${skill}%`);
        });
        sql += ")";
      }
    }

    // Availability filter
    if (availability) {
      sql += " AND availability = ?";
      params.push(availability);
    }

    // Skill level filter
    if (skillLevel) {
      switch (skillLevel) {
        case 'beginner': sql += " AND completed_projects < 10"; break;
        case 'intermediate': sql += " AND completed_projects >= 10 AND completed_projects < 50"; break;
        case 'expert': sql += " AND completed_projects >= 50"; break;
      }
    }

    // Sorting
    switch (sortBy) {
      case 'rating_high': sql += " ORDER BY rating DESC"; break;
      case 'rating_low': sql += " ORDER BY rating ASC"; break;
      case 'rate_high': sql += " ORDER BY hourly_rate DESC"; break;
      case 'rate_low': sql += " ORDER BY hourly_rate ASC"; break;
      case 'projects_high': sql += " ORDER BY completed_projects DESC"; break;
      default: sql += " ORDER BY rating DESC";
    }

    const [results] = await pool.query(sql, params);

    return NextResponse.json({
      success: true,
      freelancers: results,
      filters: { minRate, maxRate, skills, availability, skillLevel, sortBy }
    });

  } catch (error) {
    console.error('Filter freelancers error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to filter freelancers' },
      { status: 500 }
    );
  }
}