"use server"

import { pool } from "@/db"
import { revalidateTag } from "next/cache"

export const setHourlyRate = async (formData: FormData) => {
  try {
    const query = {
      text: "UPDATE settings SET value = $1 WHERE key = 'hourly_rate'",
      values: [formData.get("hourly_rate")],
    }

    await pool.query(query)

    revalidateTag("settings")
    console.log("hourly rate set")
  } catch (error) {
    console.error(error)
  }
}
