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
  },
  {
    name: "Jane Doe",
    hours: 5,
  },
  {
    name: "Bob Smith",
    hours: 8,
  },
]

const MonthHoursTable = () => {
  return (
    <TableContainer>
      <Table size={"sm"}>
        <TableCaption>Employee Hours This Month</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Hours</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hoursThisMonth.map((employee) => (
            <Tr key={employee.name}>
              <Td>{employee.name}</Td>
              <Td isNumeric>{employee.hours}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th isNumeric>{hoursThisMonth.reduce((a, b) => a + b.hours, 0)}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default MonthHoursTable
