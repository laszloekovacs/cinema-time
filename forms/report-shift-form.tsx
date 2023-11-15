"use client"

import { FieldArray, Formik } from "formik"
import {
  Stack,
  FormControl,
  FormLabel,
  Text,
  Select,
  Input,
  Button,
} from "@chakra-ui/react"
import { Employee } from "@prisma/client"
import MovieFormItem from "./movie-form-item"

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
          movies: [],
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(frm) => (
          <>
            <form>
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
                  <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input
                      type="date"
                      name="date"
                      value={frm.values.date}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Shift Start</FormLabel>
                    <Input
                      type="time"
                      name="start"
                      value={frm.values.start}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Shift End</FormLabel>
                    <Input
                      type="time"
                      name="end"
                      value={frm.values.end}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                  </FormControl>
                  {/* field array */}
                  <FieldArray
                    name={"movies"}
                    render={(arr) => (
                      <div>
                        <Button variant="outline" onClick={arr.push}>
                          add
                        </Button>

                        {frm.values.movies.map((movie, index) => (
                          <MovieFormItem
                            key={index}
                            movie={movie}
                            index={index}
                          />
                        ))}
                      </div>
                    )}
                  />
                  {/* field array */}
                </>
              )}
            </form>
          </>
        )}
      </Formik>
    </Stack>
  )
}

export default ReportShiftForm
