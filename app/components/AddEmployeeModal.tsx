"use client"
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

  return (
    <>
      <Button onClick={onOpen}>Add Employee</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <Overlay />
        <ModalContent>
          <ModalHeader>Add Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input variant="flushed" placeholder="Name" />
              <Input variant="flushed" placeholder="Contact" />
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"}>
            <Button mr={3} disabled>
              Create
            </Button>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddEmployeeModal
