


export const roomfindById = ( id, room = [] )=>{
    const newRoom = room.filter( ( room )=> room._id === id )
    if ( newRoom === null ) return []
    return newRoom[0]
}