"use server"
import { query, pool } from "@/db/index"
import { readFileSync } from "fs"

export const migrate = async () => {
  let success = false

  try {
    console.log("migrating database")

    // load schema from disk
    const schemaText = readFileSync("./db/schema.sql", "utf-8")

    // split schema into statements
    const schema = schemaText.split(";")

    // run all statements
    for await (const statement of schema) {
      pool.query(statement)
    }

    console.log("database migrated")

    success = true
  } catch (error: unknown) {
    console.error(error)
    success = false
  } finally {
    return success
  }
}
