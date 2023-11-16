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
import { Duration } from "luxon"

const ShiftsTable = ({
  shifts,
  caption,
}: {
  shifts: EmployeeShiftView[]
  caption?: string
}) => {
  return (
    <TableContainer py={6}>
      <Table size="sm">
        {caption && <TableCaption>{caption}</TableCaption>}
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
          </Tr>
        </Thead>
        <Tbody>
          {shifts.map((shift) => (
            <Tr key={shift.id}>
              <Td>{shift.employee_name}</Td>
              <Td isNumeric>{shift.date.toLocaleDateString("hu-HU")}</Td>
              <Hide below="lg">
                <Td isNumeric>{shift.start.toLocaleTimeString("hu-HU")}</Td>
                <Td isNumeric>{shift.end.toLocaleTimeString("hu-HU")}</Td>
              </Hide>
              <Hide below="md">
                <Td isNumeric>
                  {shift.movies.map((movie) => (
                    <Box key={movie}>{movie}</Box>
                  ))}
                </Td>
              </Hide>
              <Td isNumeric>
                {Duration.fromObject({ minutes: shift.minutes }).toFormat(
                  "hh:mm"
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ShiftsTable
