import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import React from "react"
import Navigation from "./Navigation"
import Link from "next/link"

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
            <Button
              as={Link}
              href="/shifts/create"
              colorScheme="teal"
              size="sm"
            >
              Report Shift
            </Button>
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

export default Header
