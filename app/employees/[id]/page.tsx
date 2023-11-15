import "server-only"
import EmployeesShiftTable from "@/app/components/EmployeesShiftTable"
import { Text, Heading, HStack, Stack } from "@chakra-ui/react"
import React from "react"
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"

const getEmployeeById = async (id: number) => {
  try {
    const prisma = new PrismaClient()
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    })

    return employee
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const getEmployeeShifts = async (id: number) => {
  try {
    const prisma = new PrismaClient()
    const shifts = await prisma.employeeShiftView.findMany({
      where: {},
    })
    return shifts
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
      <EmployeeShiftsTable shifts={shifts} />
    </Stack>
  )
}

export default Page
