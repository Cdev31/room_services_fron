import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";




export const Store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        room: authSlice.reducer
    }
})