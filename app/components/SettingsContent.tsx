import "server-only"
import React from "react"
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react"
import { pool } from "@/db"
import { setHourlyRate } from "@/db/setHourlyRate"

const getSettings = async () => {
  const map = new Map<string, string>()
  try {
    const query = await pool.query<KV>("SELECT key, value FROM settings")

    query.rows.forEach((row) => {
      map.set(row.key, row.value)
    })
  } catch (error) {
    throw error
  } finally {
    return map
  }
}

const SettingsContent = async () => {
  const settings = await getSettings()

  return (
    <form action={setHourlyRate}>
      <VStack gap={4}>
        <FormControl>
          <FormLabel>Hourly Rate</FormLabel>
          <Input
            type="number"
            name="hourly_rate"
            defaultValue={settings.get("hourly_rate")}
          />
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
