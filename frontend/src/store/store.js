import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import queryReducer from "./slices/querySlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        searchQuery: queryReducer,
    }
})

export default store;