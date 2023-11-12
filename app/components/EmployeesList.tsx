import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import EmployeeListItem from "./EmployeeListItem"

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

const EmployeesList = () => {
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
          {employees.map((employee) => (
            <EmployeeListItem key={employee.id} {...employee} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesList
