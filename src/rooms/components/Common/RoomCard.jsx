import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"


export const RoomCard = ({ room })=>{

    const navigate = useNavigate()
   
    const onChangeDetailRoom = ( id )=>{
        navigate({
            pathname: `/room/${ id }`
        })
    }

    return (
        <section 
        onClick={ () => onChangeDetailRoom( room._id ) }
        className="flex flex-col p-1 cursor-pointer hover:scale-[1.02] w-72 self-center">
            <figure className="h-44">
                {/* <img src={room.images[0]}/> */}
                <img className="h-full w-full" src="https://img.freepik.com/foto-gratis/comodo-dormitorio-moderno-elegante-cabecero-madera-generado-ia_24640-87460.jpg"/>
            </figure>
            <section className="flex flex-col gap-1 border-b-4 p-1 rounded-bl-lg rounded-br-lg">
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