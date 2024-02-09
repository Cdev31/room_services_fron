

export const createValidation = (setDisableButton, validationForm, formState)=>{
   
    for (const validationItem of Object.keys(validationForm)){ 
        if(validationForm[validationItem][0](formState[validationItem]) === false){
            return validationForm[validationItem][1]
        }

    }
    setDisableButton(true)
    
}