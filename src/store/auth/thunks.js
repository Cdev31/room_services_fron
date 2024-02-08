import { register } from "./authSlice"


const API_URL = 'http://localhost:3000/api/v1/auth'


export const registerUser = ( user )=>{
    
    return async ( dispatch )=>{

        const newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            displayName: user.displayName,
            password: user.password,
            phone: user.phone,
            gender: user.gender,
            privateInformation: {
                dui: user.dui,
                dateOfBirth: user.dateOfBirth,
                personalPhone: user.personalPhone
            }
        }

        const req = await fetch( `${ API_URL }/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( newUser )
        })

        const { error , response} = await req.json()

        if ( error === null ) return dispatch( {
            status: 'no-authenticated',
            error: error,
         })

        dispatch( {
            status: 'authenticated',
            error: null,
            userId: response?._id,
         })

     }
    
}


export const loginUser = ()=>{
    return async ( dispatch )=>{

    }
}

export const logoutUser = ()=>{
    return async ( dispatch )=>{

    }
}