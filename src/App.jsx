import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Text } from '@chakra-ui/react'


const App = () => {

  return (
    <>
      <header>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          Welcome to my Chakra UI APP
        </Text>
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/' element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App