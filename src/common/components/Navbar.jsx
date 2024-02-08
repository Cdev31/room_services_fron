import { NavLink } from "react-router-dom"
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"


export const NavBar = ()=>{
    return (
        <nav className="flex flex-col gap-1 fixed w-full border-b-2 border-room-theme/80">
            <ul className="pt-2 flex gap-1 bg-room-theme pb-1">
               <NavLink to='/' className="basis-[70%] text-white font-black text-3xl">Room App</NavLink>
               <div className="flex gap-1">
                   <li className="cursor-pointer font-medium text-white bg-room-theme m-1 p-1 rounded-md  border-white border-2 text-xl
                   hover:scale-[1.02] hover:text-white hover:bg-orange-400">
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li className="cursor-pointer font-medium text-white bg-room-theme m-1 p-1 rounded-md border-white border-2 text-xl
                   hover:scale-[1.02] hover:text-white hover:bg-orange-400">
                        <NavLink to='/singin'>
                            SignIn
                        </NavLink>
                    </li>
               </div>
            </ul>
            <div className="flex justify-center gap-2 mb-2">
                <div className="flex self-center">
                  <input type="text" className="focus:outline-none pl-2 text-black/70 font-bold border-room-theme/90 border-b-2 border-l-2 border-t-2 h-9 self-center rounded-s-md" />
                  <div className="bg-room-theme h-9 rounded-e-md cursor-pointer hover:bg-room-theme/80">
                    <MagnifyingGlassIcon className="h-full text-white p-1" />
                  </div>
                </div>
                <AdjustmentsHorizontalIcon className="hover:scale-[1.02] text-room-theme h-9 border-2 border-room-theme rounded-sm cursor-pointer ml-4"/>
            </div>
        </nav>
    )
}