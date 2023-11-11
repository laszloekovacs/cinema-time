import React from "react"
import Link from "next/link"
import { Link as ChakraLink, Flex } from "@chakra-ui/react"

const LinkList = () => (
  <Flex gap={4}>
    <ChakraLink as={Link} href="/">
      Home
    </ChakraLink>
    <ChakraLink as={Link} href="/employee">
      Employees
    </ChakraLink>
    <ChakraLink as={Link} href="/report">
      Reports
    </ChakraLink>
  </Flex>
)

export default LinkList
