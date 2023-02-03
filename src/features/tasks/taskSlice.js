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
            console.log(state, action.payload)
            state.push(action.payload)
        }
    }

})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer