import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'


const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)
  const taskMapped = tasks.map(task => task.id)

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (params.id)
      dispatch(editTask({ ...task, id: params.id }))
    else
      dispatch(addTask({ ...task, id: uuid() }))
    navigate('/')
  }

  useEffect(() => {
    // console.log(params.id)
    if (params.id) {
      setTask(taskMapped.find(taskM => taskM.id === params.id))
    }


  }, [params, tasks])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={taskMapped.title}
        />

        <textarea
          name="description"
          placeholder="descripcion"
          onChange={handleChange}
          value={taskMapped.description}
        >
        </textarea>

        <button>Guardar</button>
      </form>
    </>
  )
}

export default TaskForm

