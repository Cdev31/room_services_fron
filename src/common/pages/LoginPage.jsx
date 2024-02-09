import { NavLink, Link, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../store/auth/thunks"

const initialForm = {
    email: '',
    password: ''
}

const validationForm = {
    email: [(value)=> value?.length > 0],
    password: [(value)=> value?.length > 0]
}

export const LoginPage = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error, status } = useSelector( state => state.auth )
   
    const emailRef = useRef()
    const passwordRef = useRef()
    const buttonRef = useRef()

    const { email, password, disableButton, onNextInput, onInputChange , formState } = useForm( initialForm, validationForm )


    const onLogin = ( user )=>{
        dispatch( loginUser( user ) )
    } 

    useEffect(()=>{
        if( status === 'authenticated' )
            setTimeout(()=>{
                navigate({
                    pathname: '/'
                })
            }, 2000)
    }, [ status ])
    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 pt-10">
               <NavLink className="bg-room-theme h-52 rounded-xl" to="/">
                <p className="font-black text-white">Room App</p>
               </NavLink>
                <form className=" flex flex-col max-w-md">
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>
                            Email
                        </label>
                        <input
                            name="email"
                            value={email}
                            ref={emailRef}
                            onChange={onInputChange}
                            onKeyUp={(e)=> onNextInput( e, passwordRef )}
                            type="email"
                            placeholder='emai.example@gmail.com' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>
                            Password
                        </label>
                        <input
                            name="password"
                            value={password}
                            ref={passwordRef}
                            onChange={onInputChange}
                            onKeyUp={(e)=> onInputChange( e, buttonRef )}
                            type="password"
                            placeholder='**********' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme 
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>            
                </form>
                {
                    error != null && (
                        <span className="text-sm text-red-600 font-bold">{error}</span>
                    )
                    
                }
                <button
                 ref={buttonRef}
                 disabled={!disableButton}
                 onClick={()=> onLogin( formState )}
                 className={`${
                    disableButton === true 
                    ? "bg-room-theme"
                    : "bg-black/40"
                 } text-white rounded-lg font-bold h-10 text-xl focus:outline-none`}>
                    Login
                </button>    
                <section>
                <p className="flex flex-col">
                        <span className="font-bold text-sm">Aun no tienes una cuenta?</span>
                        <Link to="/auth/SigIn" className="font-bold text-sm underline text-blue-500 cursor-pointer
                         hover:text-yellow-500">Registrate aqui</Link>
                    </p>
                </section>
            </div>
        </main>
    )
}