import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchUsers } from "../services/apiCall";

export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {

    try {

        const test = await fetchUsers();

        return test.data;
    } catch (error) {

        return rejectWithValue(error);
    }
})
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: {


        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            console.log('users', action.payload)
            state.users = action.payload
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            // state.users = action.payload
        }
    }
})

export default userDetail.reducer;