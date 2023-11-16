import "server-only"
import EmployeeHoursTable from "./components/employee-hours-table"
import ShiftsTable from "./components/shifts-table"
import { EmployeeShiftView, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getShifts = async () => {
  try {
    const shifts = await prisma.employeeShiftView.findMany()
    return shifts as EmployeeShiftView[]
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const Home = async () => {
  const shifts = await getShifts()

  return (
    <>
      <EmployeeHoursTable />
      {shifts && <ShiftsTable shifts={shifts} />}
    </>
  )
}

export default Home
