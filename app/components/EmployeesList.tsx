import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import EmployeeListItem from "./EmployeeListItem"

const EmployeesList = async ({ employees }: { employees: Employee[] }) => {
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
            <EmployeeListItem key={employee.id} employee={employee} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesList
