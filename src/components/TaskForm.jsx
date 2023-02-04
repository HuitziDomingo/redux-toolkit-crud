import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'


const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispath(addTask({
      ...task,
      id: uuid()
    }))
    navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="descripcion"
          onChange={handleChange}
        ></textarea>

        <button>Guardar</button>
      </form>
    </>
  )
}

export default TaskForm

