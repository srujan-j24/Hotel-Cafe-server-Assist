import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice.js"
import menuReducer from './menuSlice.js'

const rootReducer = {
    table: tableReducer,
    menu: menuReducer
}

export const store = configureStore({
    reducer: rootReducer,
});