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
        deleteTask: (state, action) => {
            // console.log(action.payload) 
            let taskFound = state.find(task => task.id === action.payload)
            if(taskFound) 
                state.splice(state.indexOf(taskFound), 1)
            // console.log(taskFound)
        }

    }

})

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer