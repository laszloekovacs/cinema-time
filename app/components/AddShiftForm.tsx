"use client"
import React from "react"
import { Formik, Form, Field, FieldArray } from "formik"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  List,
  ListItem,
  Select,
  VStack,
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
        movies: [],
        entry: "",
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
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  name="date"
                  required
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.date}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Start Time</FormLabel>
                <Input
                  type="time"
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
                  type="time"
                  name="endTime"
                  pattern="[0-9]{2}:[0-9]{2}"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.endTime}
                />
                <FormErrorMessage>{props.errors.endTime}</FormErrorMessage>
              </FormControl>

              <FieldArray
                name="movies"
                render={(helpers) => (
                  <>
                    <FormLabel>Movies</FormLabel>
                    <VStack>
                      <List>
                        {props.values.movies.map((movie, index) => (
                          <ListItem key={index}>
                            {movie}
                            <Button onClick={() => helpers.remove(index)}>
                              -
                            </Button>
                          </ListItem>
                        ))}
                      </List>
                      <FormControl>
                        <Input
                          type="text"
                          name="entry"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.entry}
                        />
                      </FormControl>
                      <Button
                        onClick={() => {
                          helpers.push(props.values.entry)
                          props.values.entry = ""
                        }}
                      >
                        Add Movie
                      </Button>
                    </VStack>
                  </>
                )}
              ></FieldArray>

              <div>
                <Button disabled={props.isSubmitting}>Submit</Button>
              </div>

              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Debug form values
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <pre>{JSON.stringify(props.values, null, 2)}</pre>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          )}
        </Form>
      )}
    </Formik>
  </div>
)

export default AddShiftForm
