"use client"
import { Td, Tr } from "@chakra-ui/react"
import { Employee } from "@prisma/client"
import { useRouter } from "next/navigation"

const EmployeesTableItem = ({ employee }: { employee: Employee }) => {
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

export default EmployeesTableItem
