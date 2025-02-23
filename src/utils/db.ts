import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use Neon connection URL
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

export default pool;
