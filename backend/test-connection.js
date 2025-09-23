import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: true
  },
  connectTimeout: 60000
});

console.log('🔧 Testing database connection...');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);

connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed:', err);
    console.log('💡 Tips:');
    console.log('1. Check if IP is whitelisted in Hostinger');
    console.log('2. Verify database credentials');
    console.log('3. Ensure database exists');
  } else {
    console.log('✅ Connection successful!');
  }
  connection.end();
});