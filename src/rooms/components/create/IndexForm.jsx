import { InformationRoomForm } from "./InformationRoomForm"



export const IndexForm = ()=>{

    const onChangePage = ( step )=>{
        if( step === 1 ){
            return (
                <InformationRoomForm/>
            )
        }
        if( step === 2 ){
            
        }
        if( step === 3 ){
            
        }
    }

    return (
        <section className="flex flex-col justify-center">
            {
                onChangePage(1)
            }
        </section>
    )
}