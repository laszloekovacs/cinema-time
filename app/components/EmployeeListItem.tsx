"use client"

import { Td, Tr } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const EmployeeListItem = ({ employee }: { employee: Employee }) => {
  const { id, name, contact } = employee
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
      <Td>{contact}</Td>
    </Tr>
  )
}

export default EmployeeListItem
