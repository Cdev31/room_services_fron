


import { createSlice } from '@reduxjs/toolkit'


export const roomSlice = createSlice({
   name: 'room',

   initialState: {
      rooms: []
   },

   reducers: {
     loadRooms: ( state, { payload } )=>{
        state.rooms = payload.rooms
     }
},
})


export const { loadRooms } = roomSlice.actions