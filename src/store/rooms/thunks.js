import { loadRooms, loadRoomsByHost } from "./roomSlice"

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


export const getRoomsByHost = ( token, hostId )=>{
   return async ( dispatch )=>{
      const req = await fetch(`${API_URL}/${hostId}`, {
         method: 'GET',
         headers: {
            authorization: `Bearer ${token}`
         }
      })
      const res = await req.json()

      dispatch(
          loadRoomsByHost({
            rooms: res.response
         }))
   }
}