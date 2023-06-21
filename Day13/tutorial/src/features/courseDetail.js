import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { fetchCourses } from "../services/apiCall";

export const showCourse = createAsyncThunk("showCourse", async ({ rejectWithValue }) => {

    try {
        const result = await fetchCourses();

        return result.data;
    } catch (error) {

        return rejectWithValue(error);
    }
})
export const courseDetail = createSlice({
    name: "courseDetail",
    initialState: {
        courses: [],
        loading: false,
        error: null
    },
    extraReducers: {


        [showCourse.pending]: (state) => {
            state.loading = true;
        },
        [showCourse.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("course", action.payload)
            state.courses = action.payload
        },
        [showCourse.rejected]: (state, action) => {
            state.loading = false;
            // state.courses = action.payload
        }
    }
})

export default courseDetail.reducer;