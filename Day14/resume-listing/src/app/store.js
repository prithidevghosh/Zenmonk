import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/usersSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import  resumeDetail  from "../features/resumeSlice";



const persistConfig = {
    key: "root",
    version: 1,
    storage,
    // blacklist: ['app']
}

const reducer = combineReducers({
    app: userDetail,
    resume:resumeDetail

})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer

})