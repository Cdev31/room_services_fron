import { Footer } from "../common/components/Footer"
import { NavBar } from "../common/components/Navbar"




export const Layout = ({ children })=>{
    return (
        <div className="flex flex-col gap-1 h-[140vh]">
            <NavBar/>
            { children }
            <Footer/>
        </div>
    )
}