import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Form = ({ showPassword, showConfirmPassword, handlePassword, handleConfirm }) => {

    const navigate = useNavigate()
    // For toggling between text and password 
    // const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const firstNameRef = useRef(null) // setting them to empy by default
    const lastNameRef = useRef(null) // setting them to empy by default
    const emailRef = useRef(null) // setting them to empy by default
    const passwordRef = useRef(null) // setting them to empy by default
    const confirmPasswordRef = useRef(null) // setting them to empy by default
    const [error, setError] = useState({})

    const handleRegistration = (e) => {
        e.preventDefault()
        const registerUser = {
            firstName: firstNameRef.current.value, //current.value is used to acces current value
            lastName: lastNameRef.current.value, //current.value is used to acces current value
            email: emailRef.current.value, //current.value is used to acces current value
            password: passwordRef.current.value, //current.value is used to acces current value
            confirmPassword: confirmPasswordRef.current.value //current.value is used to acces current value
        }
        // console.log(registerUser)
        axios.post('http://localhost:8000/api/user/create', registerUser)
            .then((res) => {
                console.log(registerUser)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                console.log(localStorage)
                localStorage.setItem('token', JSON.stringify(res.data.token))
                navigate('/')
            })
            .catch(err => {
                setError(err.response.data.errors)
                console.log(err.response.data.errors)
                console.log(setError, 'Error message')
            })
    }

    return (
        <div className='w-full p-[30px] lg:w-[513px] bg-white'>
            <h2 className='text-black font-style border-b-[1px] border-grey-500 pb-2 text-[14px] font-semibold'>Create An Account</h2>
            <div className='pt-4'>
                <form onSubmit={handleRegistration}>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>

                            <label htmlFor="firstName" className='text-[12px] font-style font-medium'>First Name</label>
                            {
                                error?.firstName && (
                                    <p className='text-[12px] font-style font-medium' style={{ color: 'rgb(233, 28, 35)' }}>{error.firstName?.message}</p>
                                )
                            }
                        </div>
                        <input type="text" name="fistName" ref={firstNameRef} className={`border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium ${error?.firstName ? 'border-red-500' : '' }`} />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between'>
                            <label htmlFor="lastName" className='text-[12px] font-style font-medium'>Last Name</label>
                            {
                                error?.lastName && (
                                    <p className='text-[12px] font-style font-medium' style={{ color: 'rgb(233, 28, 35)' }}>{error.lastName?.message}</p>
                                )
                            }
                        </div>
                        <input type="text" name="lastName" ref={lastNameRef} className={`border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium ${error?.firstName ? 'border-red-500' : '' }`}  />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between'>
                            <label htmlFor="email" className='text-[12px] font-style font-medium'>Email</label>
                            {
                                error?.email && (
                                    <p className='text-[12px] font-style font-medium' style={{ color: 'rgb(233, 28, 35)' }}>{error.email?.message}</p>
                                )
                            }
                        </div>
                        <input type="text" name="email" ref={emailRef} className={`border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium ${error?.email ? 'border-red-500' : '' }`}/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between'>
                            <label htmlFor="password" className='text-[12px] font-style font-medium'>password</label>
                            {
                                error?.password && (
                                    <p className='text-[12px] font-style font-medium' style={{ color: 'rgb(233, 28, 35)' }}>{error.password?.message}</p>
                                )
                            }
                        </div>

                        <div className='flex justify-end items-center'>
                            <input type={showPassword ? 'text' : 'password'} name="password" ref={passwordRef} className={`border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium ${error?.email ? 'border-red-500 w-full' : '' }`}/>
                            <button onClick={handlePassword} className='absolute'>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex justify-between'>
                            <label htmlFor="confirmPassword" className='text-[12px] font-style font-medium'>Confirm Password</label>
                            {
                                error?.confirmPassword && (
                                    <p className='text-[12px] font-style font-medium' style={{ color: 'rgb(233, 28, 35)' }}>{error.confirmPassword?.message}</p>
                                )
                            }
                        </div>
                        <div className='flex justify-end items-center'>
                            <input type={showConfirmPassword ? 'text' : 'password'} name="" ref={confirmPasswordRef} className={`border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium ${error?.email ? 'border-red-500 w-full' : '' }`}/>
                            <button onClick={handleConfirm} className='absolute'>
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium' style={{ backgroundColor: 'rgb(231, 231, 231)' }}>Create Account</button>
                    </div>
                    <div className='text-center mt-4 flex justify-center items-center'>
                        <span className='w-[30%] border-[1px] border-r-[white] border-b-none h-[1px] mr-2'></span>
                        <p className='uppercase text-[12px] w-[40%]' style={{ color: '#818181' }}>Already Have an Account</p>
                        <span className='w-[30%] border-[1px] border-r-[white] border-b-none h-[1px]  ml-2 '></span>
                    </div>
                </form>
                <div className='text-center mt-4'>
                    <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium text-white' style={{ backgroundColor: 'rgb(233, 28, 35)' }}><Link to='/login'>Login</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Form
