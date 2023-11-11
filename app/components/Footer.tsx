import { Box, Container } from "@chakra-ui/react"
import React from "react"
import Link from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box backgroundColor="gray.600" color="white" h="min-content">
      <Container maxW="container.lg">
        <ChakraLink as={Link} href="/">
          Visit me on github
        </ChakraLink>
      </Container>
    </Box>
  )
}

export default Footer
