import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import Nav from './components/Nav'


const App = () => {

  return (
    <div
      className="bg-gradient-to-l from-red-900 via-purple-900 to-black h-screen text-white"
    >
      <div className="">
        <header className='text-center'>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='5xl'
            fontWeight='extrabold'
          >
            Bienvenido a mi App.
          <Nav/>
          </Text>
        </header>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App