import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import React from "react"
import LinkList from "./LinkList"
import Location from "./Location"

const Header = () => {
  return (
    <Flex direction={"column"} color={"teal"} backgroundColor={"gray.800"}>
      <Container maxW="container.lg">
        <Flex direction={"row"} align={"center"}>
          <Heading size="xl" my={6}>
            Cinema-time
          </Heading>
          <Spacer />
          <Location />
        </Flex>
      </Container>
      <Box backgroundColor={"gray.100"}>
        <Container maxW="container.lg">
          <Flex direction={"row"} align={"center"}>
            <LinkList />
            <Spacer />
            <Button colorScheme="teal" size="sm">
              New Report
            </Button>
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

export default Header
