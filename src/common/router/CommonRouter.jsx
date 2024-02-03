import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"



export const CommonRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}