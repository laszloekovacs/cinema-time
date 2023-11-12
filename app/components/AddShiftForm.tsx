"use client"
import React from "react"
import { Formik, Form, Field } from "formik"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react"

const AddShiftForm = () => (
  <div>
    <Heading>Record a Shift</Heading>
    <Formik
      initialValues={{ employeeId: "" }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <Form>
          <Select
            required
            placeholder="Select employee"
            name="employeeId"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.employeeId}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>

          <FormErrorMessage>{props.errors.employeeId}</FormErrorMessage>
          <Button disabled={props.isSubmitting}>Submit</Button>
          <pre>{JSON.stringify(props.values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
)

export default AddShiftForm
