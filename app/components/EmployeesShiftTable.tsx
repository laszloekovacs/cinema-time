import React from "react"
import {
  Box,
  Hide,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"

const shiftsThisMonth = [
  {
    employee: "Mike and the mech",
    date: "2022-10-01",
    start: "12:00",
    end: "18:00",
    movies: ["Jaws", "Jaws 2"],
    hours: 8,
    pay: 100,
  },
  {
    employee: "Steeven",
    date: "2022-10-01",
    start: "12:00",
    end: "18:00",
    movies: ["Jaws", "Jaws 2"],
    hours: 8,
    pay: 100,
  },
  {
    employee: "Mike",
    date: "2022-10-01",
    start: "12:00",
    end: "18:00",
    movies: ["Jaws", "Jaws 2"],
    hours: 8,
    pay: 100,
  },
]

const EmployeesShiftTable = ({ shifts }: { shifts?: any }) => {
  return (
    <TableContainer py={6}>
      <Table size="sm">
        <TableCaption>Shifts This Month</TableCaption>
        <Thead>
          <Tr>
            <Th>Employee</Th>
            <Th isNumeric>Date</Th>
            <Hide below="lg">
              <Th isNumeric>Start</Th>
              <Th isNumeric>End</Th>
            </Hide>
            <Hide below="md">
              <Th isNumeric>Movies</Th>
            </Hide>
            <Th isNumeric>Hours</Th>
            <Hide below="md">
              <Th isNumeric>Payment</Th>
            </Hide>
          </Tr>
        </Thead>
        <Tbody>
          {shiftsThisMonth.map((shift) => (
            <Tr key={shift.employee}>
              <Td>{shift.employee}</Td>
              <Td isNumeric>{shift.date}</Td>
              <Hide below="lg">
                <Td isNumeric>{shift.start}</Td>
                <Td isNumeric>{shift.end}</Td>
              </Hide>
              <Hide below="md">
                <Td isNumeric>
                  {shift.movies.map((movie) => (
                    <Box key={movie}>{movie}</Box>
                  ))}
                </Td>
              </Hide>
              <Td isNumeric>{shift.hours}</Td>
              <Hide below="md">
                <Td isNumeric>{shift.pay}</Td>
              </Hide>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesShiftTable
