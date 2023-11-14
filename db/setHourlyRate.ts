"use server"

import { pool } from "@/db"
import { revalidateTag } from "next/cache"

/**
 * Updates the hourly rate in the Settings kv table.
 *
 * @param {FormData} formData - The form data containing the new hourly rate.
 * @returns {Promise<void>} - A promise that resolves once the hourly rate is updated.
 */
export const setHourlyRate = async (formData: FormData): Promise<void> => {
  try {
    const updateQuery = {
      text: "UPDATE Settings SET value = $1 WHERE key = 'hourly_rate'",
      values: [formData.get("hourly_rate")],
    }

    const res = await pool.query(updateQuery)

    if (res.rowCount == 0) {
      throw new Error("Failed to update hourly rate.")
    }

    revalidateTag("settings")
    console.log("Hourly rate has been set.")
  } catch (error) {
    console.error(error)
  }
}
