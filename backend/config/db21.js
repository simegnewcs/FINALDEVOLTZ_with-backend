import mysql2 from "mysql2";
import dotenv from "dotenv";
import { Dumbbell } from "lucide-react";

dotenv.config();

const db = mysql2.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});


db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected...");
  }
});


export default db;