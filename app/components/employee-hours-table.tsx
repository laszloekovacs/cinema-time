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
import { Duration } from "luxon"

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

  const TotalHours = () => {
    let total = 0
    // add all employee minutes together
    hoursThisMonth.forEach((emp) => {
      total += emp.minutes
    })

    const duration = Duration.fromObject({
      minutes: total,
    })

    return duration.toFormat("hh:mm")
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
            <Th isNumeric>{TotalHours()}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default EmployeeHoursTable
