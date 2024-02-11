import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../store/rooms/thunks"
import { Layout } from "../../layout/Layout"
import { RoomList } from "../../rooms/components/Common/RoomList"
import { RoomCard } from "../../rooms/components/Common/RoomCard"


export const HomePage = ()=>{

    const dispatch = useDispatch()
    const { rooms } = useSelector( state => state.room )

    useEffect(()=>{
        dispatch( getRooms() )
    }, [])
    
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