import React from 'react'
import { useState } from 'react'
import Form from '../components/Form/Form'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirm = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <div className='flex justify-center items-center md:pt-20'>
            <Form 
                showPassword={showPassword} 
                handlePassword={handlePassword}
                showConfirmPassword={showConfirmPassword}
                handleConfirm={handleConfirm}/>
        </div>
    )
}

export default Register
