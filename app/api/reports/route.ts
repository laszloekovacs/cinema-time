import { PrismaClient, Shift } from "@prisma/client"
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  const res: ApiResult = {}

  try {
    const data: Omit<Shift, "id"> = await req.json()

    const prisma = new PrismaClient()

    const shift = await prisma.shift.create({
      data: {
        ...data,
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
