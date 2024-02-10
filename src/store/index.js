import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { roomSlice } from "./rooms/roomSlice";
import { userSlice } from "./user/userSlice";




export const Store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        room: roomSlice.reducer,
        user: userSlice.reducer
    }
})