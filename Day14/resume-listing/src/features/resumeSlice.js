import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



export const resumeDetail = createSlice({
    name: "resumeDetail",
    initialState: {
        resumes: [],

    },
    reducers: {

        addResume: (state, action) => {

            state.resumes.push(action.payload);
        },


    }


})

export const { addResume } = resumeDetail.actions;

export default resumeDetail.reducer;