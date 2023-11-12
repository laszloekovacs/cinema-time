"use client"
import { Link } from "@chakra-ui/next-js"
import {
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import React from "react"

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
            <Tr key={employee.id}>
              <Td>
                <Link as={Link} href={`/employees/${employee.id}`}>
                  {employee.name}
                </Link>
              </Td>
              <Td>{employee.contact}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesList
