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
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"

const AddEmployeeForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const router = useRouter()

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
            name: "",
            contact: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setSubmitting(true)

              toast({
                title: "submitting",
                description: "Submitting form",
                status: "info",
                duration: 3000,
                isClosable: true,
              })

              const res = await fetch("/api/employees", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })

              const data: ApiResult = await res.json()

              if (data.error) {
                throw new Error(data.error)
              }

              onClose()
              router.refresh()
              toast({
                title: "Success",
                description: "Employee added",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            } catch (error: unknown | Error) {
              toast({
                title: "Error",
                description: (error as Error).message,
                status: "error",
                duration: 3000,
                isClosable: true,
              })
            } finally {
              setSubmitting(false)
            }
          }}
          validate={(values) => {
            if (values.name.length < 3) {
              return { name: "Name required, must be 3 characters or more" }
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
                    <FormControl isInvalid={!!errors.name}>
                      <Input
                        variant="flushed"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
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
