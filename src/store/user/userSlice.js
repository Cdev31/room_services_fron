

import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
   name: 'user',

   initialState: {
     id: null,
     email: null,
     displayName: null,
     photo: null,
     dui: null,
     dateOfBirth: null,
     biografy: null,
     publicNumber: null,
     privateNumber: null,
     address: null,
     userType: null,
     gender: null,
     error: null
   },

   reducers: {
      loadProfile: ( state, { payload } )=>{
        state.id = payload._id
        state.email = payload.email
        state.displayName = payload.displayName
        state.dateOfBirth = payload.dateOfBirth
        state.biografy = payload.biografy
        state.publicNumber = payload.publicNumber
        state.privateNumber = payload.privateInformation.privateNumber
        state.userType = payload.userType
        state.gender = payload.gender
        state.photo = state.photo
        state.address = payload.privateInformation.address
        state.dui = payload.privateInformation.dui
        state.error = payload.error
      }
},
})


export const { loadProfile } = userSlice.actions