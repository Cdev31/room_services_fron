import { loadProfile } from "./userSlice"



const API_URL = 'http://localhost:3000/api/v1/user'



export const getProfile = ( token, userId ) => {
    return async ( dispatch )=>{
        const req = await fetch( `${ API_URL }/profile/${ userId }`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        } )

        if ( req.status === 401 ) 
        return dispatch({
          error: 'unauthorized' 
        })

        const res = await req.json()
        console.log({...res.response})
        dispatch( loadProfile({
            ...res.response
        }))
    }
}