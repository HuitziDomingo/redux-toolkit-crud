import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Tarea 1",
        description: "descripcion de la tarea 1",
        completed: false,
    },
    {
        id: "2",
        title: "Tarea 2",
        description: "descripcion de la tarea 2",
        completed: false,
    },
    {
        id: "3",
        title: "Tarea 3",
        description: "descripcion de la tarea 3",
        completed: true,
    }
]


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            // console.log(state, action.payload)
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload
            const foundTask = state.find((task) => task.id === id)
            
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {
            // console.log(action.payload) 
            let taskFound = state.find(task => task.id === action.payload)
            if (taskFound)
                state.splice(state.indexOf(taskFound), 1)
            // console.log(taskFound)
        },
    }

})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer