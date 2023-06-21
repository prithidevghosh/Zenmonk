import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import courseDetail from "../features/courseDetail";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['app']
}

const reducer = combineReducers({
    app: userDetail,
    course: courseDetail
})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer,

})