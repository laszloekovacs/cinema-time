import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import React from "react"
import LinkList from "./LinkList"

const Header = () => {
  return (
    <Flex direction={"column"} color={"teal"} backgroundColor={"gray.800"}>
      <Container maxW="container.xl">
        <Heading size="xl" my={6}>
          Cinema-time
        </Heading>
      </Container>
      <Box backgroundColor={"gray.100"}>
        <Container maxW="container.xl">
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
