// // import mysql2 from "mysql2";
// // import dotenv from "dotenv";
// // import { Dumbbell } from "lucide-react";

// // dotenv.config();

// // const db = mysql2.createConnection({
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASS,
// //     database: process.env.DB_NAME,
// // });


// // db.connect(err => {
// //   if (err) {
// //     console.error("❌ MySQL connection failed:", err.message);
// //   } else {
// //     console.log("✅ MySQL connected...");
// //   }
// // });


// // export default db;




// // backend/config/db.js
// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// let pool;

// export function getPool() {
//   if (!pool) {
//     pool = mysql.createPool({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS || process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       port: Number(process.env.DB_PORT || 3309),
//       waitForConnections: true,
//       connectionLimit: 10,
//       maxIdle: 5,
//       idleTimeout: 60000,
//       enableKeepAlive: true,
//       keepAliveInitialDelay: 0,
    
//       // ssl: { rejectUnauthorized: true }, // uncomment if your provider needs SSL
//     });

//     // Optional: ping once to log readiness (nice for local dev)
//     pool
//       .query('SELECT 1')
//       .then(() => console.log('✅ MySQL pool ready'))
//       .catch((err) => console.error('❌ MySQL pool init failed:', err?.message || err));
//   }
//   return pool;
// }

// // Backwards-compatible default export that supports both callback and promise usage
// function wrap(method, args) {
//   const p = getPool();
//   const maybeCb = typeof args[args.length - 1] === 'function' ? args.pop() : null;

//   if (maybeCb) {
//     p[method](...args)
//       .then(([rows, fields]) => maybeCb(null, rows, fields))
//       .catch((err) => maybeCb(err));
//     return; // callback style, no return value
//   }
//   // promise style
//   return p[method](...args);
// }

// const db = {
//   query: (...args) => wrap('query', args),
//   execute: (...args) => wrap('execute', args),
// };

// export default db;



// lib/db.js
import mysql from 'mysql2/promise';

console.log('🔧 Database configuration:', {
  host: process.env.DB_HOST ? 'Set' : 'Missing',
  user: process.env.DB_USER ? 'Set' : 'Missing',
  database: process.env.DB_NAME ? 'Set' : 'Missing',
  nodeEnv: process.env.NODE_ENV
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 10000,
  connectTimeout: 10000,
  timeout: 10000,
  debug: process.env.NODE_ENV === 'development'
});

// Test connection on startup
pool.getConnection()
  .then((connection) => {
    console.log('✅ Database connected successfully');
    connection.release();
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', {
      message: error.message,
      code: error.code,
      errno: error.errno,
      sqlState: error.sqlState
    });
  });

export default pool;