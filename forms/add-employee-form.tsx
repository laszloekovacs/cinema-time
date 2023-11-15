"use client"
import { Formik } from "formik"
import React from "react"

const AddEmployeeForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        contact: "",
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(frm) => <></>}
    </Formik>
  )
}

export default AddEmployeeForm
