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
                <img className="h-full w-full" 
                src="https://img.freepik.com/foto-gratis/comodo-dormitorio-moderno-elegante-cabecero-madera-generado-ia_24640-87460.jpg"/>
            </figure>
            <section className="flex flex-col gap-1 border-b-4 p-1 rounded-bl-lg rounded-br-lg">
                <h2 className="font-bold text-base text-black/80">
                    Cuarto para 2 personas, habitaciones con bano
                    {/* { room.title } */}
                </h2>
               <div className="flex flex-col gap-1">
                    <section className="border-2 border-black/10 rounded-md flex">
                        <div className="flex flex-col gap-1 basis-1/2">
                            <h2 className="text-center border-r-2 border-b-2 w-full font-bold">Entrada</h2>
                            <p className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-center">22/ 04/ 2020</span>
                                <span className="text-sm font-bold text-center">04:45 p.m </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 basis-1/2">
                            <h2 className="text-center w-full font-bold border-l-2 border-b-2">Salida</h2>
                            <p className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-center">22/ 04/ 2020</span>
                                <span className="text-sm font-bold text-center">04:45 p.m </span>
                            </p>
                        </div>
                    </section>
                    <div className="flex self-end">
                        <p className="text-xl flex text-green-600 mt-1 font-bold">
                            <span>$78</span>
                            <span className="text-base">.99</span>
                        </p>
                        <p className="text-sm font-bold rounded-xl p-1 text-black/70">por noche</p>
                    </div>
               </div>
            </section>
        </section>
    )
}