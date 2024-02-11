import { useState } from "react"




export const ImageCard = ( { images, title } )=>{

    const [ url, setUrl ] = useState('https://img.freepik.com/foto-gratis/comodo-dormitorio-moderno-elegante-cabecero-madera-generado-ia_24640-87460.jpg')

    const onChangeUrl = ( url )=>{
        setUrl(url)
    }

    return (
        <section className="flex flex-col gap-1 pt-36">
            <h2 className="text-xl font-bold text-black/70">{ title }</h2>
            <figure className="w-full h-48 p-1">
                <img className="w-full h-full" src={url}  />
            </figure>
            <figure className="flex gap-2 self-center">
                {
                    images?.map(( image )=>(
                        <img
                        className="h-10 w-10 border-2 rounded-md"
                        onMouseLeave={()=>onChangeUrl( image?.url )}
                        key={image?._id} src={image?.url}/>
                    ))
                }
            </figure>
        </section>
    )
}