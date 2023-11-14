"use server"

import { revalidatePath } from "next/cache"
import { pool } from "."

export const addEmployee = async (formData: FormData) => {
  try {
    const name = formData.get("name")
    const contact = formData.get("contact")

    if (!name || !contact) {
      throw new Error("Missing name or contact")
    }

    const query = {
      text: "INSERT INTO Employees (name, contact) VALUES ($1, $2)",
      values: [name, contact],
    }

    const res = await pool.query(query)

    if (res.rowCount == 0) {
      throw new Error("Failed to add employee")
    }

    console.log("employee added")
    revalidatePath("/employees")
  } catch (error) {
    console.error(error)
  }
}
