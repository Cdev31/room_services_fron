import { CurrencyDollarIcon } from "@heroicons/react/24/solid"


export const RoomCard = ({ room })=>{
    return (
        <section className="p-1 cursor-pointer hover:scale-[1.02] w-72">
            <figure className="h-36 border-2">
                <img src={room.images[0]}/>
            </figure>
            <section className="flex flex-col gap-1">
                <h2 className="font-bold text-xl text-black/80">{ room.title }</h2>
                <p className="flex gap-1 self-end">
                    <CurrencyDollarIcon className="text-green-600 h-9 self-center"/>
                    <span className="text-2xl text-green-700 mt-1 font-bold">78.99</span>
                    <span className="text-sm font-bold rounded-xl p-1 text-green-600">por noche</span>
                </p>
            </section>
        </section>
    )
}