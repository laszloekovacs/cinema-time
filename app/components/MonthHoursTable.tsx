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

const hoursThisMonth = [
  {
    name: "John Doe",
    hours: 10,
    payment: 100,
  },
  {
    name: "Jane Doe",
    hours: 5,
    payment: 50,
  },
  {
    name: "Bob Smith",
    hours: 8,
    payment: 80,
  },
]

const MonthHoursTable = () => {
  return (
    <TableContainer>
      <Table size={"sm"}>
        <TableCaption>
          Employee Hours This Month till date{" "}
          {new Date().toLocaleDateString("hu-HU")}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Hours</Th>
            <Th isNumeric>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hoursThisMonth.map((employee) => (
            <Tr key={employee.name}>
              <Td>{employee.name}</Td>
              <Td isNumeric>{employee.hours}</Td>
              <Td isNumeric>{employee.payment}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th isNumeric>{hoursThisMonth.reduce((a, b) => a + b.hours, 0)}</Th>
            <Th isNumeric>
              {hoursThisMonth.reduce((a, b) => a + b.payment, 0)}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default MonthHoursTable
