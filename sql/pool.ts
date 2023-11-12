import { Client, Pool } from "pg"

const connectionString = process.env.POSTGRES_URL

if (!connectionString) {
  throw new Error("Missing POSTGRES_URL, set it in .env")
}

export const pool = new Pool({ connectionString })
export const client = new Client({ connectionString })

export const sql = async (query: TemplateStringsArray) => {
  return pool.query(query.toString())
}

const tiny = await sql`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );`
