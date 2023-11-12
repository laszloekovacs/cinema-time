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
} from "@chakra-ui/react"
import { useFieldArray, useForm } from "react-hook-form"

const AddShiftForm = () => {
  const { control, watch, register, handleSubmit, formState } = useForm({})
  const { fields, append, remove } = useFieldArray({
    control,
    name: "movies",
    rules: {
      minLength: 1,
    },
  })
  const state = watch()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Employee</FormLabel>
          <Select {...register("employeeId")} placeholder="Select an employee">
            <option value="0">Mike</option>
            <option value="1">Steeve</option>
            <option value="2">Mark</option>
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
              <FormErrorMessage>
                {formState.errors.root?.message}
              </FormErrorMessage>
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

export default AddShiftForm
