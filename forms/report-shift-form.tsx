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
} from "@chakra-ui/react"
import { Employee } from "@prisma/client"

const ReportShiftForm = ({ employees }: { employees: Employee[] | null }) => {
  if (!employees) return <Text>No employees found</Text>

  return (
    <Stack>
      <Formik
        initialValues={{
          employee_id: "",
          date: new Date().toISOString().split("T")[0],
          start: "15:30",
          end: "20:00",
          movies: [] as string[],
        }}
        onSubmit={(values) => {}}
        validate={(values) => {
          const errors: any = {}
          if (!values.employee_id) {
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
