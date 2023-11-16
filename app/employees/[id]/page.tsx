import "server-only"

import { Text, Heading, HStack, Stack, Grid } from "@chakra-ui/react"
import React from "react"
import { EmployeeShiftView, Employee, PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"
import ShiftsTable from "@/app/components/shifts-table"

const getEmployeeById = async (id: number) => {
  try {
    const prisma = new PrismaClient()
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    })

    return employee as Employee
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const getEmployeeShifts = async (id: number) => {
  try {
    const prisma = new PrismaClient()
    const shifts = await prisma.employeeShiftView.findMany({
      where: {
        employee_id: id,
      },
    })
    return shifts as EmployeeShiftView[]
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const employee = await getEmployeeById(parseInt(id))
  const shifts = await getEmployeeShifts(parseInt(id))

  if (!employee) {
    notFound()
  }

  return (
    <Stack>
      <HStack align={"center"} my={6} justify={"space-between"}>
        <Heading size="lg">{employee.name}</Heading>
        <Text size="xs" color="gray.500">
          id: {id}
        </Text>
      </HStack>
      {shifts && <ShiftsTable shifts={shifts} />}
      {!shifts && (
        <Grid placeContent={"center"}>
          <Text>No shifts for this employee in the time frame</Text>
        </Grid>
      )}
    </Stack>
  )
}

export default Page
