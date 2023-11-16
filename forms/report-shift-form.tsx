"use client"

import { Field, FieldArray, Form, Formik } from "formik"
import {
  Stack,
  FormControl,
  FormLabel,
  Text,
  Select,
  Input,
  Button,
  HStack,
  Divider,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react"
import { Employee } from "@prisma/client"
import { useRouter } from "next/navigation"

const initialValues = {
  employee_id: "",
  date: new Date().toISOString().split("T")[0],
  start: "15:30",
  end: "20:00",
  movies: [] as string[],
}

const ReportShiftForm = ({ employees }: { employees: Employee[] | null }) => {
  const router = useRouter()
  const toast = useToast()

  if (!employees) return <Text>No employees found</Text>

  return (
    <Stack>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true)

            const res = await fetch("/api/reports", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })

            const data: ApiResult = await res.json()

            if (!res.ok || data.error) {
              throw new Error(
                "failed to create report: " + res.statusText || data.error
              )
            }
            toast({
              title: "created",
              description: "report created",
              status: "success",
              duration: 3000,
              isClosable: true,
            })

            setSubmitting(false)
            router.push("/")
          } catch (error: Error | unknown) {
            console.error(error)

            toast({
              title: "Error",
              description: (error as Error).message,
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
        }}
        validate={(values) => {
          const errors: any = {}
          if (values.employee_id == "") {
            errors.employee_id = "Required"
          }
          if (!values.date) {
            errors.date = "Required"
          }
          if (!values.start) {
            errors.start = "Required"
          }
          if (!values.end) {
            errors.end = "Required"
          }
          if (values.movies.length == 0) {
            errors.movies = "At least one movie is Required"
          }

          return errors
        }}
      >
        {(frm) => (
          <>
            <Form>
              <FormControl>
                <FormLabel>Employee</FormLabel>
                <Select
                  itemType="number"
                  name="employee_id"
                  value={frm.values.employee_id}
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                  placeholder="Select employee"
                >
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              {/* do not show the form when there's no employee selected */}
              {frm.values.employee_id && (
                <>
                  <FormControl isInvalid={!!frm.errors.date}>
                    <FormLabel>Date</FormLabel>
                    <Input
                      type="date"
                      name="date"
                      value={frm.values.date}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  <FormControl isInvalid={!!frm.errors.start}>
                    <FormLabel>Shift Start</FormLabel>
                    <Input
                      type="time"
                      name="start"
                      value={frm.values.start}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  <FormControl isInvalid={!!frm.errors.end}>
                    <FormLabel>Shift End</FormLabel>
                    <Input
                      type="time"
                      name="end"
                      value={frm.values.end}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  <Divider my={6} />
                  {/* field array */}
                  <FieldArray
                    name="movies"
                    render={({ push, remove }) => (
                      <Stack spacing={4} my={6}>
                        {frm.values.movies.map((movie, index) => (
                          <HStack key={index}>
                            <FormControl>
                              <Input
                                as={Field}
                                variant={"flushed"}
                                type="text"
                                name={`movies.${index}`}
                                placeholder="Movie title"
                              />
                            </FormControl>
                            <Button
                              variant="outline"
                              onClick={() => remove(index)}
                            >
                              remove
                            </Button>
                          </HStack>
                        ))}
                        <Button variant="outline" onClick={() => push("")}>
                          add movie
                        </Button>
                        <FormControl isInvalid={!!frm.errors.movies}>
                          <FormErrorMessage>
                            {frm.errors.movies}
                          </FormErrorMessage>
                        </FormControl>
                      </Stack>
                    )}
                  />
                  {/* submit button */}
                  <Button colorScheme="blue" type="submit">
                    Submit
                  </Button>
                </>
              )}
            </Form>
          </>
        )}
      </Formik>
    </Stack>
  )
}

export default ReportShiftForm
