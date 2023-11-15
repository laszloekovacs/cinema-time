import "server-only"
import ReportShiftForm from "@/forms/report-shift-form"
import { Employee, PrismaClient } from "@prisma/client"

const getEmployees = async (): Promise<Employee[] | null> => {
  try {
    const prisma = new PrismaClient()
    const employees = await prisma.employee.findMany()
    return employees as Employee[]
  } catch (error: unknown | Error) {
    console.error(error)
    return null
  }
}

const Page = async () => {
  const employees = await getEmployees()
  console.log(employees)
  return <ReportShiftForm employees={employees} />
}

export default Page
