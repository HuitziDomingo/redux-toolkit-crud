import { useSelector, useDispatch } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()

  const handleDelete = id => {
    // console.log(id)
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >Task {tasks.length} </Text>
        <Link href='/create-task' color='teal.500'>Crear Tarea</Link>
      </header>
      
      {
        tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
            <Button
              rightIcon={<DeleteIcon />}
              onClick={() => handleDelete(task.id)}
            >Borrar</Button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList