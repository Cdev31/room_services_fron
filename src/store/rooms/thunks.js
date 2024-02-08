import { createSlice } from '@reduxjs/toolkit'


export const roomSlice = createSlice({
   name: 'room',

   initialState: {},

   reducers: {
      increment: (state) => {

      state.value += 1

   },
},
})


export const { increment, decrement, incrementByAmount } = roomSlice.actions