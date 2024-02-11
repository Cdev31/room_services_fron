import { CurrencyDollarIcon } from "@heroicons/react/24/solid"



export const Information = ({ room })=>{
    return (
        <section className="flex flex-col gap-1 justify-center">
           <span className={`
           ${ room?.reserved === true ? 'bg-red-600' : 'bg-green-600' }
           self-end text-white font-bold rounded-md p-1 mr-2 text-sm`}>{
            room?.reserved === true ? 'Reservado' : 'No reservado'
           }</span>
            <div className="flex gap-1 justify-center">
                <p className="flex flex-col gap-1">
                    <span>Region:</span>
                    <span>Ciudad:</span>
                    <span>Direccion:</span>
                </p>
                <p className="flex flex-col gap-1">
                    <span>{ room?.department }</span>
                    <span>{ room?.city }</span>
                    <span>{ room?.address }</span>
                </p>
            </div>
            <p className="flex gap-1 mt-2 self-end">
                    <CurrencyDollarIcon className="text-green-600 h-9 self-center"/>
                    <span className="text-2xl text-green-700 mt-1 font-bold">78.99</span>
                    <span className="text-sm font-bold rounded-xl p-1 text-green-600">por noche</span>
                </p>
        </section>
    )
}