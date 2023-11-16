import React from "react"
import Link from "next/link"
import { Link as ChakraLink, Flex, Tooltip } from "@chakra-ui/react"

const Navbar = () => (
  <Flex gap={4} my={4} align={"center"}>
    <Tooltip
      label="quick overview of employees, latest shifts recored"
      openDelay={1500}
      hasArrow
    >
      <ChakraLink as={Link} href="/">
        Home
      </ChakraLink>
    </Tooltip>
    <Tooltip label="list of all employees" openDelay={1500} hasArrow>
      <ChakraLink as={Link} href="/employees">
        Employees
      </ChakraLink>
    </Tooltip>
    <Tooltip label="list of all shifts recorded" openDelay={1500} hasArrow>
      <ChakraLink as={Link} href="/shifts">
        Shifts
      </ChakraLink>
    </Tooltip>
  </Flex>
)

export default Navbar
