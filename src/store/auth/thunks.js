import { login, register } from "./authSlice"


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

        if ( error === null ) return dispatch( register({
            status: 'no-authenticated',
            error: error,
         }) )

        dispatch( register({
            status: 'authenticated',
            error: null,
            userId: response?._id,
         }) )

     }
    
}


export const loginUser = ( user )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${ API_URL }/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( user )
        })

        if ( req.status === 401 ){
           return dispatch( login( {
                error: 'User our password invalid'
            } ) )
        }

        const res = await req.json()

        dispatch( login({ 
            token: res.token,
            error: null,
            userId: res.userId,
            status: 'authenticated'
        }))

    }
}

export const logoutUser = ()=>{
    return async ( dispatch )=>{

    }
}