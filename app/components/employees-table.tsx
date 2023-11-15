"use client"
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import EmployeesTableItem from "./employees-table-item"
import { Employee } from "@prisma/client"

const EmployeesTable = ({ employees }: { employees: Employee[] }) => {
  return (
    <TableContainer my={6}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <EmployeesTableItem key={employee.id} employee={employee} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable
