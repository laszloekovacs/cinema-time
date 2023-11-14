import "server-only"
import React from "react"
import EmployeeHoursTable from "./components/EmployeeHoursTable"
import ShiftsTable from "./components/ShiftsTable"

// TODO: query employee hours, query shifts

const Home = () => {
  return (
    <>
      <EmployeeHoursTable />
      <ShiftsTable />
    </>
  )
}

export default Home
