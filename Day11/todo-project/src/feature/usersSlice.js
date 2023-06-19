import { createSlice } from '@reduxjs/toolkit'
import users_array from "../users.json"
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [...users_array],
  },
  reducers: {

  
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectUser = (state) => state.users.value

export default usersSlice.reducer
