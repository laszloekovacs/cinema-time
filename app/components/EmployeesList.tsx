import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import EmployeeListItem from "./EmployeeListItem"
import { pool } from "@/db"

const employees = [
  {
    id: 1,
    name: "John",
    contact: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane",
    contact: "email@movies.com",
  },
  {
    id: 3,
    name: "Bob",
    contact: "123-456-7890",
  },
]

type Employee = {
  id: number
  name: string
  contact: string
}

const getEmployees = async () => {
  try {
    const query = {
      text: "SELECT * FROM employees",
      values: [],
    }

    const result = await pool.query<Employee>(query)

    return result.rows
  } catch (error: unknown | Error) {
    console.error(error)
  }
}

const EmployeesList = async () => {
  const list = await getEmployees()

  return (
    <TableContainer my={6} mx={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list &&
            list.map((employee) => (
              <EmployeeListItem key={employee.id} {...employee} />
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesList
