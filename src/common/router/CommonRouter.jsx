import { Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from '../pages'


export const CommonRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/singin" element={<RegisterPage/>}/>
        </Routes>
    )
}