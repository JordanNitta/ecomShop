import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null) // setting them to empy by default
    const [showPassword, setShowPassword] = useState(false);
    
    const handlePasswordToggle = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };
    return (
        <div className='w-full p-[30px] lg:w-[513px] bg-white mx-auto'>
            <h2 className='text-black font-style border-b-[1px] border-grey-500 pb-2 text-[14px] font-semibold'>Login</h2>
            <div className='pt-4'>
                <form>
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
                    <div className='text-center mt-4'>
                        <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium text-white'   style={{backgroundColor: 'rgb(233, 28, 35)'}}>Login</button>
                    </div>
                    <div className='text-center mt-4 flex justify-center items-center'>
                        <span className='w-[30%] border-[1px] border-r-[white] border-b-none h-[1px] mr-2'></span>
                            <p className='uppercase text-[12px] w-[40%]' style={{color: '#818181'}}>Already Have an Account</p> 
                        <span className='w-[30%] border-[1px] border-r-[white] border-b-none h-[1px]  ml-2 '></span>
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium' style={{ backgroundColor: 'rgb(231, 231, 231)' }}><Link to='/register'>Create Account</Link></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
