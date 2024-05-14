import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../store/rooms/thunks"
import { getProfile } from "../../store/user/thunks"
import { Layout } from "../../layout/Layout"
import { RoomList } from "../../rooms/components/Common/RoomList"
import { RoomCard } from "../../rooms/components/Common/RoomCard"


export const HomePage = ()=>{

    const rooms = [
        { _id: 1},
        { _id: 2},
        { _id: 3},
        { _id: 4}
    ]
    // const dispatch = useDispatch()
    // const { rooms } = useSelector( state => state.room )
    // const { token, userId, status  } = useSelector( state => state.auth )

    // useEffect(()=>{
    //     dispatch( getRooms() )
    // }, [])

    // useEffect(()=>{
    //     if ( status === 'authenticated' ){
    //         dispatch( getProfile( token, userId ) )
    //     }
    // }, [ status ])
    
    return (
    <Layout>
        <RoomList>
            {
                rooms.map( ( room )=> (
                    <RoomCard 
                    key={room._id}
                    room={room}/>
                ))
            }
        </RoomList>
    </Layout>
    )
}