import React from "react"
import { Container, Heading } from "@chakra-ui/react"
import EmployeeHoursThisMonth from "./components/EmployeeHoursThisMonth"

const Page = () => {
  return (
    <Container maxW="container.xl">
      <Heading size={"lg"} my={6}>
        Home
      </Heading>
      <EmployeeHoursThisMonth />
    </Container>
  )
}

export default Page
