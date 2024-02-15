



export const InformationRoomForm = ()=>{
    const disableButton = false;

    return (
        <section className="self-center mt-1">
            <h2 className="text-xl text-center bg-room-theme text-white rounded-md p-1 font-semibold">Informacion del cuarto</h2>
            <form className="flex flex-col gap-1" onSubmit={(e)=>{ e.preventDefault() }}>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/70 bg-white p-1 ml-2 relative top-4 w-[3.3rem] z-10'>
                        Titulo
                    </label>
                    <input
                        name="title"
                        type="text"
                        placeholder='Titulo de ejemplo de cuarto' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/70
                        rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/70 bg-white p-1 ml-2 relative top-4 w-24 z-10'>
                        Descripcion
                    </label>
                    <textarea
                        name="description"
                        type="text"
                        placeholder='Descripcion de ejemplo de cuarto' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/70
                        rounded-lg h-20 pt-3 pl-2 font-bold text-black/50'></textarea>      
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/70 bg-white p-1 ml-2 relative top-4 w-20 z-10'>
                        Direccion
                    </label>
                    <input
                        name="address"
                        type="text"
                        placeholder='Direccion de ejemplo de cuarto' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/70
                        rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className="flex gap-2" >
                    <div className='flex flex-col self-center w-[9.7rem]'>
                        <label className='font-bold text-black/70 bg-white p-1 ml-2 relative top-4 w-[7.3rem]
                        z-10'>
                            Departamento
                        </label>
                        <input
                            name="department"
                            type="text"
                            placeholder='La Libertad' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/70
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-[9.7rem]'>
                        <label className='font-bold text-black/70 bg-white p-1 ml-2 relative top-4 w-[3.6rem]
                            z-10'>
                            Ciudad
                        </label>
                        <input
                            name="city"
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/70
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                </div>
                <button
                 className={`${ disableButton == true 
                    ? 'bg-room-theme'
                    : 'bg-black/40'
                } rounded-lg font-bold w-full h-10 text-xl mt-2 focus:outline-none text-white `}>
                    Next
                </button>  
            </form>
        </section>
    )
}