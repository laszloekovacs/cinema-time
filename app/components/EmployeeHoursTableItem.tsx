"use client"
import { Td, Tr } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import React from "react"

const EmployeeHoursTableItem = ({
  id,
  name,
  hours,
  payment,
}: {
  id: number
  name: string
  hours: string
  payment: string
}) => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/employees/${id}`)
  }

  return (
    <Tr
      onClick={() => handleClick(id)}
      _hover={{ cursor: "pointer", bg: "gray.100" }}
    >
      <Td>{name}</Td>
      <Td isNumeric>{hours}</Td>
      <Td isNumeric>{payment}</Td>
    </Tr>
  )
}

export default EmployeeHoursTableItem
