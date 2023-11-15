"use client"

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  useDisclosure,
  Stack,
  useToast,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import { ErrorMessage, Form, Formik } from "formik"

const AddEmployeeForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Add Employee</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          onClick={onClose}
          bg="blackAlpha.300"
          backdropFilter={"auto"}
          backdropBlur="2px"
        />

        <Formik
          initialValues={{
            employee: "",
            contact: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            console.log(values)
            onClose()
            setSubmitting(false)
          }}
          validate={(values) => {
            if (values.employee.length < 3) {
              return { employee: "Name required, must be 3 characters or more" }
            }
          }}
        >
          {({ handleChange, handleBlur, isSubmitting, values, errors }) => (
            <Form>
              <ModalContent>
                <ModalHeader>Add Employee</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
                    <FormControl isInvalid={!!errors.employee}>
                      <Input
                        variant="flushed"
                        name="employee"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.employee}
                      />
                      <FormErrorMessage>{errors.employee}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                      <Input
                        variant="flushed"
                        name="contact"
                        placeholder="Contact email or phone number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contact}
                      />
                    </FormControl>
                  </Stack>
                </ModalBody>
                <ModalFooter justifyContent={"space-between"}>
                  <Input type="submit" value="Create" disabled={isSubmitting} />
                </ModalFooter>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default AddEmployeeForm
