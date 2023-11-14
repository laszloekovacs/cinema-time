import { Stack, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import EmployeesList from "../components/EmployeesList"
import AddEmployeeModal from "../components/AddEmployeeModal"

const Page = () => {
  return (
    <Stack>
      <Flex direction={"row"} justify={"space-between"}>
        <Heading size={"lg"}>Employees</Heading>
        <AddEmployeeModal />
      </Flex>
      <EmployeesList />
    </Stack>
  )
}

export default Page
