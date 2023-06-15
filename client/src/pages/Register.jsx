import React from 'react'
import { useState } from 'react'
import Form from '../components/Form/Form'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    
    return (
        <div className='flex justify-center items-center md:pt-20'>
            <Form />
        </div>
    )
}

export default Register
