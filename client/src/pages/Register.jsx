import React from 'react'
import { useState } from 'react'
import Form from '../components/Form/Form'

const Register = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };
    const handleConfirm = (e) => {
        e.preventDefault()
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <div className='flex justify-center items-center lg:pt-20'>
            <Form 
                showPassword={showPassword} 
                handlePassword={handlePassword}
                showConfirmPassword={showConfirmPassword}
                handleConfirm={handleConfirm}/>
        </div>
    )
}

export default Register
