import { PrismaClient, Shift } from "@prisma/client"
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  const res: ApiResult = {}

  try {
    const data = await req.json()

    const prisma = new PrismaClient()

    // the database only stores the time part an
    // only the date part.
    const shift = await prisma.shift.create({
      data: {
        employee_id: parseInt(data.employee_id),
        date: new Date(data.date),
        start: new Date("2000-01-01T" + data.start).toISOString(),
        end: new Date("2000-01-01T" + data.end).toISOString(),
        movies: data.movies,
      },
    })
    console.log(shift)
    res.data = shift
  } catch (error: unknown | Error) {
    console.error(error)
    res.error = (error as Error).message
  } finally {
    return new Response(JSON.stringify(res))
  }
}
