import { NavLink, Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useRef } from "react"
import { useDispatch } from "react-redux"

import { registerUser } from "../../store/auth/thunks"

const initialForm = {
    firstName: '',
    lastName: '',
    displayName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    personalPhone: '',
    dui: '',
    email: '',
    password: ''

}

const validationForm = {
    firstName: [( value )=> value?.length > 0]
}

export const RegisterPage = ()=>{

    const dispatch = useDispatch()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const displayNameRef = useRef()
    const genderRef = useRef()
    const dateOfBirthRef = useRef()
    const phoneRef = useRef()
    const personalPhoneRef = useRef()
    const duiRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const buttonRef = useRef()

    const { firstName, lastName, displayName, gender, dateOfBirth, phone,
            personalPhone, dui, email, password, onInputChange, onNextInput, 
            disableButton, formState } = useForm( initialForm, validationForm )

            

    const onRegisterUser = ( user )=>{
        dispatch( registerUser( user ) )
    }


    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 pt-2">
                <form className=" flex flex-col max-w-md">
                    <div className="flex gap-2" >
                        <div className='flex flex-col self-center w-[9.7rem]'>
                            <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[5.8rem] 
                            z-10'>
                                First Name
                            </label>
                            <input
                                name="firstName"
                                value={firstName}
                                ref={firstNameRef}
                                onChange={onInputChange}
                                onKeyUp={(e)=>onNextInput( e, lastNameRef )}
                                type="text"
                                placeholder='Alexy' 
                                className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                                rounded-lg h-12 pl-2 font-bold text-black/50'/>
                        </div>
                        <div className='flex flex-col self-center w-[9.7rem]'>
                            <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[5.8rem]
                             z-10'>
                                Last Name
                            </label>
                            <input
                                name="lastName"
                                value={lastName}
                                ref={lastNameRef}
                                onChange={onInputChange}
                                onKeyUp={(e)=> onNextInput( e, displayNameRef )}
                                type="text"
                                placeholder='Jhonson' 
                                className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                                rounded-lg h-12 pl-2 font-bold text-black/50'/>
                        </div>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[7.1rem] z-10'>
                            Display Name
                        </label>
                        <input
                            name="displayName"
                            value={displayName}
                            ref={displayNameRef}
                            onChange={onInputChange}
                            onKeyUp={(e)=> onNextInput( e, genderRef )}
                            type="text"
                            placeholder='Alexy Jhonson Mac' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className="flex gap-2" >
                        <div className='flex flex-col self-center w-[9.7rem]'>
                            <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-16 z-10'>
                                Gender
                            </label>
                            <select
                             name="gender"
                             value={gender}
                             ref={genderRef}
                             onChange={onInputChange}
                             onKeyUp={( e )=> onNextInput( e, dateOfBirthRef ) }
                             className='focus:outline-orange-300 bg-white focus:scale-[1.02] border-2 
                             border-room-theme rounded-lg h-12 pl-2 font-bold text-black/50'>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Otro</option>
                                </select>
                        </div>
                        <div className='flex flex-col self-center w-[9.7rem]'>
                            <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[5.8rem] 
                            z-10'>
                                Birth day
                            </label>
                            <input
                                name="dateOfBirth"
                                value={dateOfBirth}
                                ref={dateOfBirthRef}
                                onChange={onInputChange}
                                onKeyUp={ ( e )=> onNextInput( e, phoneRef ) }
                                type="date"
                                placeholder='Jhonson' 
                                className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                                rounded-lg h-12 pl-2 font-bold text-black/50'/>
                        </div>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[10.6rem] z-10'>
                            Public number phone
                        </label>
                        <input
                            name="phone"
                            value={phone}
                            ref={phoneRef}
                            onChange={onInputChange}
                            onKeyUp={ ( e )=> onNextInput( e, personalPhoneRef ) }
                            type="text"
                            placeholder='1234 2342' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-[11.2rem] z-10'>
                            Private number phone
                        </label>
                        <input
                            name="personalPhone"
                            value={personalPhone}
                            ref={personalPhoneRef}
                            onChange={onInputChange}
                            onKeyUp={ ( e )=> onNextInput( e, duiRef ) }
                            type="text"
                            placeholder='7890 3439' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-9 z-10'>
                            DUI
                        </label>
                        <input
                            name="dui"
                            value={dui}
                            ref={duiRef}
                            onChange={onInputChange}
                            onKeyUp={ ( e )=> onNextInput( e, emailRef ) }
                            type="text"
                            placeholder='6782392-1' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-room-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>
                            Email
                        </label>
                        <input
                            name="email"
                            value={email}
                            ref={emailRef}
                            onChange={onInputChange}
                            onKeyUp={ ( e )=> onNextInput( e, passwordRef ) }
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
                            onKeyUp={ ( e )=> onNextInput( e, buttonRef ) }
                            type="password"
                            placeholder='**********' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-room-theme 
                            rounded-lg h-12 pl-2 font-bold text-black/50'/>
                    </div>            
                </form>
                <button
                 ref={buttonRef}
                 disabled={!disableButton}
                 onClick={()=>onRegisterUser( formState )}
                 className={`${ disableButton == true 
                    ? 'bg-room-theme'
                    : 'bg-black/40'
                } rounded-lg font-bold h-10 text-xl focus:outline-none text-white `}>
                    SigIn
                </button>    
                <section className="mb-5">
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