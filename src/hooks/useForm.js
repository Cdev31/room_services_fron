import { useEffect, useState } from "react"
import { createValidation } from './helpers/validator'

export const useForm = (initialForm = {} , validationForm = {} )=>{

    const [ formState, setFormState ] = useState(initialForm)
    const [ disableButton, setDisableButton ] = useState(false)
    const [ messageError, setMessageError ] = useState('')

    useEffect(()=>{
        setFormState(initialForm)
    }, [ initialForm ])

    useEffect(()=>{
        const error = createValidation(setDisableButton, validationForm, formState)
        setMessageError(error)
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
        messageError,
        disableButton,
        onInputChange, 
        setDisableButton,
    }
}