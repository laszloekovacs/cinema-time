import "server-only"
import { Stack, Flex, Heading, Grid, Text } from "@chakra-ui/react"
import React from "react"
import EmployeesTable from "../components/EmployeesTable"
import AddEmployeeModal from "../components/AddEmployeeModal"
import { PrismaClient } from "@prisma/client"

const getEmployes = async () => {
  try {
    const prisma = new PrismaClient()
    const employees = await prisma.employee.findMany()
    return employees
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

// return employees and their contacts in a table
const Page = async () => {
  const employees = await getEmployes()

  return (
    <Stack>
      <Flex direction={"row"} justify={"space-between"}>
        <Heading size={"lg"}>Employees</Heading>
        <AddEmployeeModal />
      </Flex>
      {employees && <EmployeesTable employees={employees} />}

      {!employees && (
        <Grid placeContent={"center"} h={"100%"}>
          <Text>No employees registered. add more</Text>
        </Grid>
      )}
    </Stack>
  )
}

export default Page
