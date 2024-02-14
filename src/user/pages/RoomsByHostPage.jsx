import { useSelector } from "react-redux"
import { RoomList } from "../../rooms/components/Common/RoomList"
import { RoomCard } from "../../rooms/components/Common/RoomCard"
import { Layout } from "../../layout/Layout"




export const RoomsByHostPage = ()=>{

    const { roomsByHost } = useSelector( state => state.room )
  
    return (
        <Layout>
            <RoomList>
                {
                    roomsByHost.map( ( room )=> (
                        <RoomCard 
                        key={room._id}
                        room={room}/>
                    ))
                }
            </RoomList>
        </Layout>
    )
}