import "server-only"
import React from "react"
import EmployeeHoursTable from "./components/EmployeeHoursTable"
import EmployeeShiftTable from "./components/employees-shift-table"

// TODO: query employee hours, query shifts

const Home = () => {
  return (
    <>
      <EmployeeHoursTable />
      <EmployeeShiftTable />
    </>
  )
}

export default Home
