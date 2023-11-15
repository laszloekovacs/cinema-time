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

import React from "react"

const AddEmployeeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const Overlay = () => (
    <ModalOverlay
      onClick={onClose}
      bg="blackAlpha.300"
      backdropFilter={"auto"}
      backdropBlur="2px"
    />
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    toast({
      title: "Employee added",
      status: "success",
      duration: 3000,
      isClosable: true,
    })

    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add Employee</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <Overlay />
        <form onSubmit={handleSubmit}>
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
