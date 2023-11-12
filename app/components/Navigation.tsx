import React from "react"
import Link from "next/link"
import { Link as ChakraLink, Flex } from "@chakra-ui/react"

const Navigation = () => (
  <Flex gap={4} my={4}>
    <ChakraLink as={Link} href="/">
      Home
    </ChakraLink>
    <ChakraLink as={Link} href="/employees">
      Employees
    </ChakraLink>
    <ChakraLink as={Link} href="/reports">
      Reports
    </ChakraLink>
  </Flex>
)

export default Navigation
