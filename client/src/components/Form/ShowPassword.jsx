import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const ShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <button onClick={handlePassword} className='absolute'>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
        </div>
    )
}

export default ShowPassword
