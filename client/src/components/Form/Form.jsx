import React from 'react'

const Form = () => {
    return (
        <div className='w-full p-[30px] md:w-[513px] bg-white'>
            <h2 className='text-black font-style border-b-[1px] border-grey-500 pb-2 text-[14px] font-semibold'>Create An Account</h2>
            <div className='md:pt-4'>
                <form>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName" className='text-[12px] font-style font-medium'>First Name</label>
                        <input type="text" className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="lastName" className='text-[12px] font-style font-medium'>Last Name</label>
                        <input type="text" className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="email" className='text-[12px] font-style font-medium'>Email</label>
                        <input type="text" className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="password" className='text-[12px] font-style font-medium'>password</label>
                        <input type="password" className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="password" className='text-[12px] font-style font-medium'>Confirm Password</label>
                        <input type="password" className='border-[1px] h-[40px] px-2 mt-2 text-[12px] font-medium'/>
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='uppercase mt-2 w-full h-[50px] font-style font-medium' style={{backgroundColor: 'rgb(231, 231, 231)'}}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
