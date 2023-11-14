import type { Metadata } from "next"
import Provider from "./components/Provider"
import { Container, Grid } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Cinema-time",
  description: "Time keeping app for cinema",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Grid
            maxW="100%"
            minH="100vh"
            p={0}
            m={0}
            gap={6}
            templateRows="auto 1fr auto"
          >
            <Header />
            <Container maxW="container.lg" p={4}>
              {children}
            </Container>
            <Footer />
          </Grid>
        </Provider>
      </body>
    </html>
  )
}
