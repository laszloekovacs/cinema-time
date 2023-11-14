import "server-only"
import ReportShiftForm from "@/app/components/ReportShiftForm"
import React from "react"
import { pool } from "@/db"

const queryEmployees = async () => {
  try {
    const res = await pool.query<Employee>("SELECT * FROM employees")

    return res.rows
  } catch (error: unknown | Error) {
    throw error
  }
}

const Page = async () => {
  const employees = await queryEmployees()

  return <ReportShiftForm employees={employees} />
}

export default Page
