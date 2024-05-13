import { Link } from "react-router-dom"


export const Footer = ()=>{
    return (
        <footer className="flex flex-col bg-gradient-to-r from-orange-800 to-orange-700 gap-1 fixed w-full bottom-0 border-t-2
         border-orange-800">
            <div className="flex gap-5 self-center m-1">
                <Link className="bg-gradient-to-r border-b-2 from-orange-800 to-orange-700  h-10 p-2 text-center
                rounded-md text-white font-bold text-base hover:scale-[1.02]">Github</Link>
                <Link className="bg-gradient-to-r border-b-2 from-orange-800 to-orange-700  h-10 p-2 text-center
                rounded-md text-white font-bold text-base hover:scale-[1.02]" >Linkdin</Link>
            </div>
            <p className="bg-white text-orange-800 font-bold text-center">Proyecto creado por Kalet Chavez</p>
        </footer>
    )
}