import React from "react"
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react"
import { pool } from "@/db"

type KV = {
  key: string
  value: string
}

const getSettings = async () => {
  try {
    const query = await pool.query<KV>({
      text: "SELECT * FROM settings",
      values: [],
    })

    return query.rows
  } catch (error) {
    console.error(error)
  }
}

const SettingsContent = async () => {
  const settings = await getSettings()
  const map = new Map(settings?.map((s) => [s.key, s.value]))

  return (
    <form>
      <VStack gap={4}>
        <FormControl>
          <FormLabel>Hourly Rate</FormLabel>
          <Input defaultValue={map.get("hourly_rate") || 0} />
          <FormHelperText>Enter your hourly rate</FormHelperText>
        </FormControl>
        <FormControl>
          <Input type="submit" value="Set" />
        </FormControl>
      </VStack>
    </form>
  )
}

export default SettingsContent
