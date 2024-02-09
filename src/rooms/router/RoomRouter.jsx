import { Route, Routes } from "react-router-dom"
import { RoomDetailsPage, CreateRoomPage, RoomFilterPage } from "../pages"

export const RoomRouter = ()=>{
    return (
        <Routes>
            <Route path="/:id" element={<RoomDetailsPage/>}/>
            <Route path="/create" element={<CreateRoomPage/>}/>
            <Route path="/" element={<RoomFilterPage/>}/>
        </Routes>
    )
}