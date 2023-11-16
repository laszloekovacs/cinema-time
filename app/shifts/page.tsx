import "server-only"
import ShiftsTable from "../components/shifts-table"
import { EmployeeShiftView, PrismaClient } from "@prisma/client"

const getShifts = async () => {
  try {
    const prisma = new PrismaClient()
    const shifts = await prisma.employeeShiftView.findMany()
    return shifts as EmployeeShiftView[]
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const Page = async () => {
  const shifts = await getShifts()

  return <>{shifts && <ShiftsTable shifts={shifts} />}</>
}

export default Page
