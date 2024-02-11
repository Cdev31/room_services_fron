


export const RoomList = ({ children })=>{
    return (
        <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 w-full pt-36 pb-36">
            { children }
        </ul>
    )
}