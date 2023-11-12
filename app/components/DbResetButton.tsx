import { Input, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { migrate } from "@/db/migrate"

const DbResetButton = () => {
  return (
    <Stack>
      <Text>Migrate database schema</Text>
      <form action={migrate}>
        <Input type="submit" value="Migrate" />
      </form>
    </Stack>
  )
}

export default DbResetButton
