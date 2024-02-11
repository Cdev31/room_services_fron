import { useState } from "react"




export const ReservationCalendar = ()=>{

    const [ entryDay, setEntryDay ] = useState()

    return (
        <section className="flex flex-col gap-1 justify-center mt-8">
            <h2 className="self-center text-xl p-1 font-bold">Has tu reservacion</h2>
            <section className="flex gap-5 justify-center">
                <div className="flex flex-col gap-1 ">
                    <label className="self-center font-bold text-black/90">Dia de entrada</label>
                    <input className="border-2 p-1 rounded-md border-green-950 text-green-950 font-bold" type="date"/>
                </div>
                <div className="flex flex-col gap-1 ">
                    <label className="self-center font-bold text-black/90">Dia de salida</label>
                    <input className="border-2 p-1 rounded-md border-green-950 text-green-950 font-bold" type="date"/>
                </div>
            </section>
            <button className="mt-2 border-green-700 border-2 text-green-700 font-bold self-center w-80 rounded-md h-10 hover:scale-[1.02] cursor-pointer">Reservar</button>
        </section>
    )
}