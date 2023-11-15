"use client"
import { Td, Tr } from "@chakra-ui/react"
import { EmployeeHoursThisMonth } from "@prisma/client"
import { useRouter } from "next/navigation"
import React from "react"

const EmployeeHoursTableItem = ({
  hours,
}: {
  hours: EmployeeHoursThisMonth
}) => {
  const router = useRouter()
  const { employee_id, employee_name, hours: hoursThisMonth } = hours

  const handleClick = (id: number) => {
    router.push(`/employees/${id}`)
  }

  return (
    <Tr
      onClick={() => handleClick(employee_id)}
      _hover={{ cursor: "pointer", bg: "gray.100" }}
    >
      <Td>{employee_name}</Td>
      <Td isNumeric>{hoursThisMonth}</Td>
      <Td isNumeric>{211}</Td>
    </Tr>
  )
}

export default EmployeeHoursTableItem
