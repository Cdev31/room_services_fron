


import { createSlice } from '@reduxjs/toolkit'


export const roomSlice = createSlice({
   name: 'room',

   initialState: {
      rooms: [],
      roomsByHost: []
   },

   reducers: {
     loadRooms: ( state, { payload } )=>{
        state.rooms = payload.rooms
     },
     loadRoomsByHost: ( state, { payload } )=>{
      state.roomsByHost = payload.rooms
   }
},
})


export const { loadRooms, loadRoomsByHost } = roomSlice.actions