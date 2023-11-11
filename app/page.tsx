import React from "react"
import { Container, Heading } from "@chakra-ui/react"
import MonthHoursTable from "./components/MonthHoursTable"
import MonthShifts from "./components/MonthShifts"

const Page = () => {
  return (
    <Container maxW="container.xl">
      <Heading size={"lg"} my={6}>
        Home
      </Heading>
      <MonthHoursTable />
      <MonthShifts />
    </Container>
  )
}

export default Page
