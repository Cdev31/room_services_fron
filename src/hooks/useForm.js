import { useEffect, useState } from "react"
import { createValidation } from './helpers/validator'

export const useForm = (initialForm = {} , validationForm = {} )=>{

    const [ formState, setFormState ] = useState(initialForm)
    const [ disableButton, setDisableButton ] = useState(false)

    useEffect(()=>{
        setFormState(initialForm)
    }, [ initialForm ])

    useEffect(()=>{
        createValidation(setDisableButton, validationForm, formState)
    }, [ formState ])
    

    const onInputChange = (event)=>{
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const onNextInput = (e, nextInput)=>{
        if( e.key === 'Enter' ){
            nextInput.current.focus()
        }
    } 
    

    return {
        ...formState,
        formState,
        onNextInput,
        disableButton,
        onInputChange, 
        setDisableButton,
    }
}