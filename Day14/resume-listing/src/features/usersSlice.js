import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: {
            contact: "",
            isLoggedIn: false
        }

    },
    reducers: {

        addUser: (state, action) => {



            state.users.contact = action.payload
            state.users.isLoggedIn = true
            console.log("state users", state.users);

        },
        logOutUser: (state, action) => {
            state.users.contact = "";
            state.users.isLoggedIn = false;
        }



    }


})

export const { addUser, logOutUser } = userDetail.actions;

export default userDetail.reducer;