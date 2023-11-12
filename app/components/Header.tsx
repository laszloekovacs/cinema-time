import {
  Text,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react"
import React from "react"
import Navigation from "./Navigation"

const Header = () => {
  return (
    <Flex direction={"column"} color={"teal"} backgroundColor={"gray.800"}>
      <Container maxW="container.lg">
        <Flex direction={"row"} align={"center"}>
          <Heading size="xl" my={6}>
            Cinema-time
          </Heading>
          <Spacer />
          <Heading>{new Date().toLocaleDateString("hu-HU")}</Heading>
        </Flex>
      </Container>
      <Box backgroundColor={"gray.100"}>
        <Container maxW="container.lg">
          <Flex direction={"row"} align={"center"}>
            <Navigation />
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
