import "server-only"
import ReportShiftForm from "@/app/components/ReportShiftForm"
import React from "react"
import { pool } from "@/db"

const queryEmployees = async () => {
  try {
    const query = await pool.query<Employee>({
      text: "SELECT * FROM employees",
      values: [],
    })

    return query.rows
  } catch (error) {
    console.error(error)
  }
}

const Page = async () => {
  const employees = await queryEmployees()

  if (!employees) {
    console.log("no employees add more")
    return null
  }

  return <ReportShiftForm employees={employees} />
}

export default Page
