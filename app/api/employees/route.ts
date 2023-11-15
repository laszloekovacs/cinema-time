import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

// create employee
export const POST = async (req: NextRequest) => {
  const res: ApiResult = {}
  try {
    const { name, contact }: { name: string; contact: string } =
      await req.json()

    const prisma = new PrismaClient()

    const employee = await prisma.employee.create({
      data: {
        name,
        contact,
      },
    })

    res.data = employee
  } catch (error: unknown | Error) {
    console.error(error)
    res.error = (error as Error).message
  } finally {
    revalidatePath("/employees")
    return new Response(JSON.stringify(res))
  }
}
