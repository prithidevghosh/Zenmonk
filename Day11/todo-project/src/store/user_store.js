import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/usersSlice';
import taskReducer from "../feature/taskSlice"
export default configureStore({
    reducer:{
        users:userReducer,
        tasks:taskReducer
    }
})