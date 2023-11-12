import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import EmployeeHoursTableItem from "./EmployeeHoursTableItem"

const hoursThisMonth = [
  {
    id: 1,
    name: "John Doe",
    hours: "10",
    payment: "100",
  },
  {
    id: 2,
    name: "Jane Doe",
    hours: "5",
    payment: "50",
  },
  {
    id: 3,
    name: "Bob Smith",
    hours: "8",
    payment: "80",
  },
]

const EmployeeHoursTable = () => {
  return (
    <TableContainer my={6}>
      <Table size={"sm"}>
        <TableCaption>
          Employee Hours This Month till date{" "}
          {new Date().toLocaleDateString("hu-HU")}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Hours This Month</Th>
            <Th isNumeric>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hoursThisMonth.map((employee) => (
            <EmployeeHoursTableItem key={employee.id} {...employee} />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th isNumeric>{100}</Th>
            <Th isNumeric>{70}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default EmployeeHoursTable
