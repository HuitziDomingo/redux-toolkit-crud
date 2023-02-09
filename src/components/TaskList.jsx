import { useSelector, useDispatch } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Text } from '@chakra-ui/react'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'


const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = id => {
    // console.log(id)
    dispatch(deleteTask(id))
  }

  return (
    <div className='text-center w-full '>

    <Login/>

      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'
      >Numero de tareas: {tasks.length} </Text>

      <Link
        className='bg-blue-900 p-3 inline-block my-3 rounded-lg hover:bg-sky-700 ease-in duration-300'
        to='/create-task'
        color='teal.500'
      >Crear Tarea
      </Link>
      <div className='grid grid-cols-3 mx-auto w-4/6'>
        {
          tasks.map(task => (
            <div 
            key={task.id}
             className="
             bg-sky-700 my-10 w-96 rounded-lg py-10 shadow-2xl
             bg-gradient-to-r from-red-900 via-purple-900
             "
             >
              <h3 className='text-xl'>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
              <div className='w-full'>
                <Button
                  className='text-black shadow-xl'
                  rightIcon={<DeleteIcon />}
                  onClick={() => handleDelete(task.id)}
                >Borrar
                </Button>
              </div>
              <Link to={`/edit-task/${task.id}`} color='teal.500'>Editar</Link>
            </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default TaskList