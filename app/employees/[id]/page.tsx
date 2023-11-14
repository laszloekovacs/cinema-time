import "server-only"
import ShiftsTable from "@/app/components/ShiftsTable"
import { Text, Heading, HStack, VStack, Stack } from "@chakra-ui/react"
import React from "react"
import { pool } from "@/db"

const queryEmployee = async (id: number) => {
  try {
    const query = await pool.query<Employee>({
      text: "SELECT * FROM employees WHERE id = $1",
      values: [id],
    })

    return query?.rows[0]
  } catch (error) {
    console.error(error)
  }
}

const queryEmployeeShift = async (id: number) => {
  try {
    const shifts = await pool.query<ShiftView>({
      text: "SELECT * FROM shifts WHERE employee_id = $1",
      values: [id],
    })

    return shifts?.rows
  } catch (error) {
    console.error(error)
  }
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const employee = await queryEmployee(Number(id))
  const shifts = await queryEmployeeShift(Number(id))

  return (
    <Stack>
      <HStack align={"center"} my={6} justify={"space-between"}>
        <Heading size="lg">{employee?.name}</Heading>
        <Text size="xs" color="gray.500">
          id: {id}
        </Text>
      </HStack>
      <ShiftsTable shifts={shifts} />
    </Stack>
  )
}

export default Page
