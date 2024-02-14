import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Layout } from "../../layout/Layout"
import { OperationOptions } from "../components/OperationOptions"
import { getRoomsByHost } from "../../store/rooms/thunks"


export const ProfilePage = ()=>{

    const dispatch = useDispatch()
    const { id } = useSelector( state => state.user )
    const { token } = useSelector( state => state.auth )
   
    useEffect(()=>{
        dispatch( getRoomsByHost( token, id ) )
    }, [])

    return (
        <Layout>
            <main className="mt-36">
                <OperationOptions/>
            </main>
        </Layout>
    )
}