import "server-only"
import { Stack, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import EmployeesList from "../components/EmployeesList"
import AddEmployeeModal from "../components/AddEmployeeModal"
import { pool } from "@/db"

const getEmployeeHours = async () => {
  const query = `
  SELECT e.name, 
  COALESCE(SUM(s.duration), 0) AS total_hours
  FROM employees e
  LEFT JOIN shifts s ON e.id = s.employee_id
  GROUP BY e.name
  `

  try {
    const res = await pool.query({
      text: query,
      values: [],
    })

    return res.rows
  } catch (error: unknown | Error) {
    console.error(error)
  }
}

const Page = async () => {
  return (
    <Stack>
      <Flex direction={"row"} justify={"space-between"}>
        <Heading size={"lg"}>Employees</Heading>
        <AddEmployeeModal />
      </Flex>
      <EmployeesList />
    </Stack>
  )
}

export default Page
