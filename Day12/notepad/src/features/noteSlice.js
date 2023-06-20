import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
        array:[]
    },
    reducers: {

        addTask: (state, action) => {
            state.value = [...state.value, action.payload]
            // console.log(state.value);
        },
        removeTask: (state, action) => {
            let id = action.payload;
            let arr = state.value.filter((item) => {
                return item.id != id
            })

            state.value = arr;
            console.log(state.value);

        },
        editTask: (state, action) => {
            let id = action.payload.id;
            let obj = state.value.find((item) => {
                return item.id == id;
            })
            obj.title = action.payload.title;
            obj.content = action.payload.content
        }

    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { addTask, removeTask, editTask } = noteSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const getTasks = (state) => state.tasks.value

export default noteSlice.reducer
