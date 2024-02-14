import { Route, Routes } from "react-router-dom"
import { ProfilePage } from "../pages/ProfilePage"
import { RoomsByHostPage } from "../pages/RoomsByHostPage"



export const UserRouter = ()=>{
    return (
        <Routes>
            <Route path="/profile/:id" element={<ProfilePage/>} />
            <Route path="/profile/:id/rooms" element={<RoomsByHostPage/>} />
        </Routes>
    )
}