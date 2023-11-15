import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import EmployeeHoursTableItem from "./employee-hours-table-item"
import { EmployeeHoursThisMonth, PrismaClient } from "@prisma/client"

const getHours = async () => {
  try {
    const prisma = new PrismaClient()

    const hours = await prisma.employeeHoursThisMonth.findMany()

    return hours as EmployeeHoursThisMonth[]
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const EmployeeHoursTable = async () => {
  const hoursThisMonth = await getHours()

  if (!hoursThisMonth) {
    return null
  }

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
          {hoursThisMonth.map((hours) => (
            <EmployeeHoursTableItem key={hours.employee_id} hours={hours} />
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
