"use client"
import { Td, Tr } from "@chakra-ui/react"
import { EmployeeHoursThisMonth } from "@prisma/client"
import { Duration } from "luxon"
import { useRouter } from "next/navigation"
import React from "react"

const EmployeeHoursTableItem = ({
  hours,
}: {
  hours: EmployeeHoursThisMonth
}) => {
  const router = useRouter()
  const { employee_id, employee_name, minutes } = hours

  const handleClick = (id: number) => {
    router.push(`/employees/${id}`)
  }

  return (
    <Tr
      onClick={() => handleClick(employee_id)}
      _hover={{ cursor: "pointer", bg: "gray.100" }}
    >
      <Td>{employee_name}</Td>
      <Td isNumeric>{Duration.fromObject({ minutes }).toFormat("hh:mm")}</Td>
    </Tr>
  )
}

export default EmployeeHoursTableItem
