import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../store/rooms/thunks"
import { Layout } from "../../layout/Layout"
import { RoomList } from "../../rooms/components/RoomList"
import { RoomCard } from "../../rooms/components/RoomCard"


export const HomePage = ()=>{

    const dispatch = useDispatch()
    const { rooms } = useSelector( state => state.room )

    useEffect(()=>{
        dispatch( getRooms() )
    }, [])
    console.log(rooms)
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