import { loadRooms } from "./roomSlice"

const API_URL = 'http://localhost:3000/api/v1/room'


export const getRooms = ()=>{
   return async ( dispatch )=>{
      const req = await fetch(API_URL)
      const res = await req.json()

      dispatch(
          loadRooms({
            rooms: res.response
         }))
   }
}