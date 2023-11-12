import ShiftsTable from "@/app/components/ShiftsTable"
import { Text, Heading, HStack, VStack, Stack } from "@chakra-ui/react"
import React from "react"

const employee = "mike"

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Stack>
      <HStack align={"center"} my={6} justify={"space-between"}>
        <Heading size="lg">{employee}</Heading>
        <Text size="xs" color="gray.500">
          id: {id}
        </Text>
      </HStack>
      <ShiftsTable />
    </Stack>
  )
}

export default Page
