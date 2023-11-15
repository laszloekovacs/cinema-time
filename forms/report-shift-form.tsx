"use client"

import { Formik } from "formik"
import {
  Stack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Select,
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
          start: "16:00",
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
            </form>
            <pre>{JSON.stringify(frm.values, null, 2)}</pre>
          </>
        )}
      </Formik>
    </Stack>
  )
}

export default ReportShiftForm
