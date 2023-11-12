"use client"
import { Stack } from "@chakra-ui/react"
import { useFieldArray, useForm } from "react-hook-form"

const AddShiftForm = () => {
  const { control, watch, register, handleSubmit, formState } = useForm({})
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "movies",
  })
  const state = watch()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("employeeId")}>
          <option value="0">Mike</option>
          <option value="1">Steeve</option>
          <option value="2">Mark</option>
        </select>

        <input type="date" {...register("date")} />
        <input type="time" {...register("start")} />
        <input type="time" {...register("end")} />

        <input type="submit" value="submit" />
      </form>

      <ul>
        {fields.map((field, index) => (
          <div key={field.id}>
            <label htmlFor="title">Title</label>
            <input type="text" {...register(`movies.${index}.title`)} />

            <button
              type="button"
              onClick={() => {
                remove(index)
              }}
            >
              remove
            </button>
          </div>
        ))}
      </ul>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Stack>
  )
}

export default AddShiftForm
