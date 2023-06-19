import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: ""
    },
    reducers: {
        addString: (state, action) => {
            console.log(action.payload);
        state.value=action.payload;
        }
    }

})

export const {addString} =CounterSlice.actions;
export const selectCount = (state) => state.counter.value
export default CounterSlice.reducer
