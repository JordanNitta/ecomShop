import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Form = () => {
    const navigate = useNavigate()
    // For toggling between text and password 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const firstNameRef = useRef(null) // setting them to empy by default
    const lastNameRef = useRef(null) // setting them to empy by default
    const emailRef = useRef(null) // setting them to empy by default
    const passwordRef = useRef(null) // setting them to empy by default
    const confirmPasswordRef = useRef(null) // setting them to empy by default
    const [error, setError] = useState({})
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirmToggle = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegistration = (event) => {
        event.preventDefault()
        const registerUser = {
            firstName: firstNameRef.current.value, //current.value is used to acces current value
            lastName: lastNameRef.current.value, //current.value is used to acces current value
            email: emailRef.current.value, //current.value is used to acces current value
            password: passwordRef.current.value, //current.value is used to acces current value
            confirmPasswordRef: confirmPasswordRef.current.value //current.value is used to acces current value
        }
        axios.post('http://localhost:8000/api/user/create', registerUser) 
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', JSON.stringify(res.data.token))
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                setError(err.response.data)
                console.log(err.response.data)
                console.log(setError, 'Error message')
            })
    }

    return (
        <div className='w-full p-[30px] md:w-[513px] bg-white'>
            <h2 className='text-black font-style border-b-[1px] border-grey-500 pb-2 text-[14px] font-semibold'>Create An Account</h2>
            <div className='pt-4'>
                <form onSubmit={handleRegistration}>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName" className='text-[12px] font-style font-medium'>First Name</label>
                        <input type="text" name="name" ref={firstNameRef} className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="lastName" className='text-[12px] font-style font-medium'>Last Name</label>
                        <input type="text" name="lastName" ref={lastNameRef} className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="email" className='text-[12px] font-style font-medium'>Email</label>
                        <input type="text" name="email" ref={emailRef} className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="password" className='text-[12px] font-style font-medium'>password</label>
                        
                        <div className='flex justify-end items-center'>
                            <input type={showPassword ? 'text' : 'password'} name="password" ref={passwordRef} className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium w-full' />
                            <button onClick={handlePasswordToggle} className='absolute'>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="confirmPassword" className='text-[12px] font-style font-medium'>Confirm Password</label>
                        <div className='flex justify-end items-center'>
                            <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" ref={confirmPasswordRef} className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium w-full' />
                            <button onClick={handleConfirmToggle} className='absolute'>
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium' style={{ backgroundColor: 'rgb(231, 231, 231)' }}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
