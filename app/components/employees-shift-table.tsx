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

import { EmployeeShiftView } from "@prisma/client"

const EmployeeShiftTable = ({
  shifts,
  caption,
}: {
  shifts: EmployeeShiftView[]
  caption?: string
}) => {
  return null
  return (
    <TableContainer py={6}>
      <Table size="sm">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          <Tr>
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
          {shifts.map((shift) => (
            <Tr key={shift.id}>
              <Td isNumeric>{shift.date.toString()}</Td>
              <Hide below="lg">
                <Td isNumeric>{shift.start.toString()}</Td>
                <Td isNumeric>{shift.end.toString()}</Td>
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
                <Td isNumeric>{122}</Td>
              </Hide>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default EmployeeShiftTable
