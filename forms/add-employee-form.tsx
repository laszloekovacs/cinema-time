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
} from "@chakra-ui/react"

import React, { useEffect } from "react"
import { addEmployeeAction } from "./add-employee-action"
import { useFormState } from "react-dom"

const AddEmployeeForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [formState, formAction] = useFormState(addEmployeeAction, null)

  useEffect(() => {
    if (formState == null) {
      return
    }

    if (formState.error) {
      toast({
        title: "Error",
        description: formState.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Success",
        description: formState.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }
  }, [formState])

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
        <form action={formAction} onSubmit={() => onClose()}>
          <ModalContent>
            <ModalHeader>Add Employee</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Input
                  variant="flushed"
                  name="name"
                  placeholder="Name"
                  required
                />
                <Input
                  variant="flushed"
                  name="contact"
                  placeholder="Contact"
                  required
                />
              </Stack>
              <pre>
                <code>{JSON.stringify(formState, null, 2)}</code>
              </pre>
            </ModalBody>
            <ModalFooter justifyContent={"space-between"}>
              <Input type="submit" value="Create" />
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  )
}

export default AddEmployeeForm
