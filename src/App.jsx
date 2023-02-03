import  TaskForm  from './components/TaskForm'
import TaskList from './components/TaskList'
import { Text } from '@chakra-ui/react'
const App = () => {

  return (
    <>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Welcome to my Chakra UI APP
      </Text>
      <TaskForm />
      <TaskList/>
    </>
  )
}

export default App