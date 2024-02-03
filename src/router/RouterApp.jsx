import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../common"



export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<CommonRouter/>}/>
        </Routes>
    )
}