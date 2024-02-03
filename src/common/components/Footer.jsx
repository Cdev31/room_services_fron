import { Link } from "react-router-dom"


export const Footer = ()=>{
    return (
        <footer className="flex flex-col gap-1 fixed w-full bottom-0 border-t-2 border-room-theme">
            <div className="flex gap-5 self-center m-1">
                <Link className="border-room-theme/80 h-10 p-1 text-center border-2 rounded-md text-room-theme font-bold text-lg
                 hover:scale-[1.02]">Github</Link>
                <Link className="border-room-theme/80 h-10 p-1 text-center border-2 rounded-md text-room-theme font-bold text-lg
                 hover:scale-[1.02]">Linkdin</Link>
            </div>
            <p className="bg-room-theme text-white font-bold text-center">Proyecto creado por Kalet Chavez</p>
        </footer>
    )
}