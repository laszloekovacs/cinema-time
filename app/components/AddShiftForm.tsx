"use client"
import React from "react"
import { Formik, Form, Field } from "formik"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react"

const AddShiftForm = () => (
  <div>
    <Heading>Record a Shift</Heading>
    <Formik
      initialValues={{
        employeeId: "",
        date: "",
        startTime: "",
        endTime: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <Form>
          <FormControl>
            <FormLabel>Employee</FormLabel>
            <Select
              required
              placeholder="pick an employee"
              name="employeeId"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.employeeId}
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
          </FormControl>

          {props.values.employeeId != "" && (
            <>
              <HStack>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    name="date"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.date}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Start Time</FormLabel>
                  <Input
                    name="startTime"
                    placeholder="15:30"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.startTime}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>End Time</FormLabel>
                  <Input
                    name="endTime"
                    placeholder="20:00"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.endTime}
                  />
                </FormControl>
              </HStack>

              <div>
                <Button disabled={props.isSubmitting}>Submit</Button>
                <pre>{JSON.stringify(props.values, null, 2)}</pre>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  </div>
)

export default AddShiftForm
