import { Client, Pool } from "pg"

const connectionString = process.env.POSTGRES_URL

if (!connectionString) {
  throw new Error("Missing POSTGRES_URL, set it in .env")
}

export const pool = new Pool({ connectionString })
export const client = new Client({ connectionString })

export const query = (text: string, params: string[]) => {
  return pool.query(text, params)
}
