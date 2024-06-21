import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice.js"
import menuReducer from './menuSlice.js'
import authReducer from './authSlice.js'

const rootReducer = {
    table: tableReducer,
    menu: menuReducer,
    auth: authReducer
}

export const store = configureStore({
    reducer: rootReducer,
});