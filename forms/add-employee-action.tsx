"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

export const addEmployeeAction = async (prevState: any, formData: FormData) => {
  try {
    const name = formData.get("name")
    const contact = formData.get("contact")

    if (typeof name !== "string" || typeof contact !== "string") {
      throw new Error("Invalid form data")
    }

    const prisma = new PrismaClient()

    await prisma.employee.create({
      data: {
        name: name as string,
        contact: contact as string,
      },
    })

    revalidatePath("/employees")

    return { message: "Employee added", error: false }
  } catch (error: unknown | Error) {
    console.error(error)
    return { message: (error as Error).message, error: true }
  }
}
