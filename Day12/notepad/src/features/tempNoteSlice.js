import { createSlice } from '@reduxjs/toolkit'

export const tempNoteSlice = createSlice({
    name: 'tempnote',
    initialState: {
        value: [],
    },
    reducers: {

        addTask: (state, action) => {
            state.value = [...state.value, action.payload]
            // console.log(action.payload);
        },

    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { addTask } = tempNoteSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const getNotes = (state) => state.tempnote.value

export default tempNoteSlice.reducer
