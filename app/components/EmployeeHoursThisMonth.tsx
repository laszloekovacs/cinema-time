import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import MonthHoursTable from "./MonthHoursTable"

const EmployeeHoursThisMonth = () => {
  return (
    <Flex direction={"column"} gap={4} my={6}>
      <MonthHoursTable />
    </Flex>
  )
}

export default EmployeeHoursThisMonth
