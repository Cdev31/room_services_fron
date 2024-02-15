import { useState } from "react"
import { Layout } from "../../layout/Layout"
import { IndexForm, StepRegister } from "../components/create"


export const CreateRoomPage = ()=>{

    const [steps, setSteps] = useState({
        'step1': false,
        'step2': false,
        'step3': false,
        'step4': false
    })

    const onChangeStep = ( step )=>{
        setSteps({
            ...steps,
            [`step${step}`]: true
        })
    }

    return (
        <Layout>
            <main className="mb-36 mt-28 flex flex-col gap-1" >
                <StepRegister steps={steps}/>
                <IndexForm />
            </main>
        </Layout>   
    )
}