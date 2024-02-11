import { useSelector } from "react-redux"
import { Layout } from "../../layout/Layout"
import { useParams } from "react-router-dom"
import { roomfindById } from "../../utils/findById"
import { ImageCard } from "../components/DetailsPage/ImageCard"
import { Information } from "../components/DetailsPage/Information"
import { ReservationCalendar } from "../components/DetailsPage/ReservationCalendar"
import { InformationHost } from "../components/DetailsPage/InformationHost"



export const RoomDetailsPage = ()=>{

    const { rooms } = useSelector( state => state.room )
    const { id } = useParams()

    const room = roomfindById( id, rooms )
    console.log(room)
    return (
        <Layout>
            <ImageCard title={ room?.title } images={ room?.images }/>
            <Information room={room}/>
            <ReservationCalendar/>
            <InformationHost/>
        </Layout>   
    )
}