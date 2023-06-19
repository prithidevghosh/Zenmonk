import { createSlice } from '@reduxjs/toolkit'
import users_array from "../users.json"
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
    },
    reducers: {

        addTask: (state, action) => {

            state.value = [...state.value, action.payload]
            console.log(state.value);
        }
    },
})

export const { addTask } = taskSlice.actions

export const selectTask = (state) => state.tasks.value

export default taskSlice.reducer
