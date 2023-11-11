import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import LinkList from "./LinkList"

const Header = () => {
  return (
    <Flex direction={"column"} backgroundColor={"gray.100"} p={4}>
      <Heading size="xl">Cinema-time</Heading>
      <LinkList />
    </Flex>
  )
}

export default Header
