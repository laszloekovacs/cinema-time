"use client"
import { addEmployee } from "@/db/addEmployee"
import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
  Input,
} from "@chakra-ui/react"
import React from "react"

const AddEmployeeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const Overlay = () => (
    <ModalOverlay
      onClick={onClose}
      bg="blackAlpha.300"
      backdropFilter={"auto"}
      backdropBlur="2px"
    />
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add Employee</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <Overlay />
        <form action={addEmployee} onSubmit={handleSubmit}>
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

export default AddEmployeeModal
