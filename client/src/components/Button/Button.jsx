import React from 'react'
import './Button.css'
const Button = ( {product} ) => {

    return (
        <button 
            className='
            button-style 
            h-[40px] 
            px-[70px] 
            md:w-[50%]
            w-[80%]
            text-[16px] font-500 text-white' >
            ${product.price}
        </button>
    )
}

export default Button
