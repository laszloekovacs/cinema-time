import { NextRequest } from "next/server"
import { PrismaClient, Employee } from "@prisma/client"

// create employee
export const POST = async (req: NextRequest) => {
  const data = await req.json()

  try {
    const prisma = new PrismaClient()
  } catch (error: unknown | Error) {}
}
