type Employee = {
  id: number
  name: string
  contact: string
}

type Shift = {
  id: number
  employee_id: number
  date: string
  start: string
  end: string
  movies: string[]
}

type ShiftView = {
  id: number
  employee: string
  employee_id: number
  date: string
  start: string
  end: string
  movies: string[]
}

type KV = {
  key: string
  value: string
}
