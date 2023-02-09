import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from '../features/auth/authReducer'
import taskReducer from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer, 
        auth: authReducer
    }
})