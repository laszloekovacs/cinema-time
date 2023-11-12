import React from "react"
import { Container, Grid, Heading } from "@chakra-ui/react"
import MonthHoursTable from "./components/MonthHoursTable"
import MonthShifts from "./components/MonthShifts"

const Home = () => {
  return (
    <>
      <MonthHoursTable />
      <MonthShifts />
    </>
  )
}

export default Home
