import { NavLink } from "react-router-dom"
import { AdjustmentsHorizontalIcon, ArrowRightEndOnRectangleIcon, Bars3Icon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useSelector } from "react-redux"


export const NavBar = ()=>{

    const { status }= useSelector( state => state.auth )
    const { id } = useSelector( state => state.user )

    return (
        <nav className="flex flex-col z-20  gap-1  bg-gradient-to-r from-orange-800 to-orange-700
        fixed w-full border-b-2 border-orange-800">
            <ul className="pt-2 flex gap-1 border-room-theme">
               <NavLink to='/' className="basis-[70%] text-white font-black text-3xl">Room App</NavLink>
               <div className="flex gap-1">
                   {
                    status !== 'authenticated' && (
                        <>
                            <li className="cursor-pointer font-bold bg-gradient-to-r from-orange-700 to-orange-600
                             text-white m-1 p-2 rounded-md  border-white border-b-2 text-base sm:text-xl
                                hover:scale-[1.02] hover:text-white hover:bg-red-400">
                                    <NavLink to='/login'>
                                        Login
                                    </NavLink>
                            </li>
                            <li className="cursor-pointer font-bold bg-gradient-to-r from-orange-700 to-orange-600
                             text-white m-1 p-2 rounded-md  border-white border-b-2 text-base
                                hover:scale-[1.02] hover:text-white hover:bg-red-400">
                                    <NavLink to='/singin'>
                                        SignIn
                                    </NavLink>
                            </li>
                        </>
                    )
                   }
                   {
                    status === 'authenticated' && (
                        <>
                            {/* <li className="cursor-pointer font-medium text-white bg-room-theme m-1 p-1 rounded-md  border-white border-2 text-xl
                                hover:scale-[1.02] hover:text-white hover:bg-orange-400">
                                    <NavLink to='/rooms'>
                                        Rooms
                                    </NavLink>
                            </li> */}
                            <li className="cursor-pointer font-medium text-white bg-white p-1 rounded-md text-xl
                                hover:scale-[1.02]">
                                    <NavLink className="flex gap-1 w-20 sm:w-auto justify-center" to={`/user/profile/${id}`}>
                                        <UserCircleIcon className="h-10 text-room-theme"/>
                                        <p className="self-center hidden sm:block text-room-theme text-sm">kalet.elsalvadorca@gmail.com</p>
                                    </NavLink>
                            </li>
                            <ArrowRightEndOnRectangleIcon className="h-11 self-center text-white hover:scale-[1.02] cursor-pointer"/>
                        </>
                    )
                   }
               </div>
            </ul>
            {/* <div className="flex justify-center gap-2 pb-2">
                <div className="bg-room-theme p-1 rounded-md hover:scale-[1.02] cursor-pointer sm:hidden">
                    <Bars3Icon className="h-8 text-white"/>
                 </div>
                <div className="flex self-center bg-white">
                
                  <input type="text" className="focus:outline-none w-44 sm:w-auto pl-2 text-black/70 font-bold border-room-theme/90 border-b-2 border-l-2 border-t-2 h-9 self-center rounded-s-md" />
                  <div className="bg-room-theme h-9 rounded-e-md cursor-pointer hover:bg-room-theme/80">
                    <MagnifyingGlassIcon className="h-full text-white p-1" />
                  </div>
                </div>
                <AdjustmentsHorizontalIcon className="hover:scale-[1.02] text-room-theme h-9 border-2 border-room-theme rounded-sm cursor-pointer ml-4"/>
            </div> */}
        </nav>
    )
}