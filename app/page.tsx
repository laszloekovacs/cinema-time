import "server-only"
import React from "react"
import EmployeeHoursTable from "./components/EmployeeHoursTable"
import EmployeesShiftTable from "./components/EmployeesShiftTable"

// TODO: query employee hours, query shifts

const Home = () => {
  return (
    <>
      <EmployeeHoursTable />
      <EmployeesShiftTable />
    </>
  )
}

export default Home
