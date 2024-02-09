import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../common"
import { UserRouter } from "../user"
import { RoomRouter } from "../rooms"


export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/*" element={<CommonRouter/>}/>
            <Route path="user/*" element={<UserRouter/>}/>
            <Route path="/room/*" element={<RoomRouter/>}/>
        </Routes>
    )
}