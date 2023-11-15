import "server-only"
import EmployeeHoursTable from "./components/EmployeeHoursTable"
import EmployeeShiftTable from "./components/employees-shift-table"

// TODO: query employee hours, query shifts

const Home = async () => {
  return (
    <>
      <EmployeeHoursTable />
      <EmployeeShiftTable />
    </>
  )
}

export default Home
