import { useSelector } from "react-redux"
import { Link } from "react-router-dom"




export const OperationOptions = ()=>{

    const { id } = useSelector( state => state.user )

    return (
        <section className="flex flex-col gap-1">
            <Link to={`/user/profile/${id}/rooms`}>Rooms</Link>
            <Link to={`/room/create`}>Create room</Link>
        </section>
    )
}