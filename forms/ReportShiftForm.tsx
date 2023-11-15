"use client"
import {
  FormControl,
  FormLabel,
  VStack,
  Button,
  HStack,
  Input,
  Select,
  Stack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react"
import { useFieldArray, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { createReportAction } from "@/db/createReportAction"

const ReportShiftForm = ({ employees }: { employees: Employee[] }) => {
  const toast = useToast()
  const router = useRouter()
  const { control, watch, register, handleSubmit, formState } = useForm({})
  const { fields, append, remove } = useFieldArray({
    control,
    name: "movies",
    rules: {
      minLength: 1,
    },
  })
  const state = watch()

  const onValid = (data: any) => {
    console.log(data)
    toast({
      title: "Shift added",
      status: "success",
      duration: 3000,
      isClosable: true,
    })

    router.push("/")
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit(onValid)} action={createReportAction}>
        <FormControl>
          <FormLabel>Employee</FormLabel>
          <Select {...register("employeeId")} placeholder="Select an employee">
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </Select>
        </FormControl>
        {state.employeeId != "" && (
          <>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="date" {...register("date", { required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel>Start</FormLabel>
              <Input type="time" {...register("start", { required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel>End</FormLabel>
              <Input type="time" {...register("end", { required: true })} />
            </FormControl>

            <VStack my={6}>
              <Button
                size="sm"
                variant="outline"
                onClick={() => append("movie")}
              >
                add movie
              </Button>

              {fields.map((field, index) => (
                <HStack key={field.id}>
                  <FormLabel htmlFor="Movie Title">Title</FormLabel>
                  <Input type="text" {...register(`movies.${index}`)} />

                  <Button
                    size="sm"
                    variant="outline"
                    type="button"
                    onClick={() => {
                      remove(index)
                    }}
                  >
                    remove
                  </Button>
                </HStack>
              ))}
            </VStack>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </>
        )}
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Stack>
  )
}

export default ReportShiftForm
