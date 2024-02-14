import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
   name: 'auth',

   initialState: {
     status: 'no-authenticated',
     token: null,
     userId: null,
     error: null
   },

   reducers: {
     login: ( state, { payload } )=>{
        state.error = payload.error
        state.status = payload.status
        state.token = payload.token
        state.userId = payload.userId
     },
     register: ( state, { payload } )=>{
        state.error = payload.error
        state.status = payload.status
     }
},
})


export const { register, login } = authSlice.actions