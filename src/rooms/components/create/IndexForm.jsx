import { useState } from "react"
import { InformationRoomForm } from "./InformationRoomForm"
import { LoadImageRoomForm } from "./LoadImageRoomForm"



export const IndexForm = ({ onChangeStep })=>{

    const [ step, setStep ] = useState(1)

    const onChangePage = ( step )=>{
        if( step === 1){
            return (
                <InformationRoomForm onNext={ setStep } />
            )
        }
        if( step === 2 ){
            return (
                <LoadImageRoomForm/>
            )
            
        }
        if( step === 3 ){
            
        }
    }

    return (
        <section className="flex flex-col justify-center">
            {
                onChangePage( step )
            }
        </section>
    )
}