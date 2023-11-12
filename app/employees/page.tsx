import { Button, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import EmployeesList from "../components/EmployeesList"

const EmployeesPage = () => {
  return (
    <>
      <Flex direction={"row"} justify={"space-between"}>
        <Heading>Employees</Heading>
        <Button>Add Employee</Button>
      </Flex>
      <EmployeesList />
    </>
  )
}

export default EmployeesPage
