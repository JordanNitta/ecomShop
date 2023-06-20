import React from 'react'
import './Button.css'
const FilterButton = ({openMenu}) => {

    return (
        <button onClick={openMenu}
            className='
            h-[40px] 
            px-[70px] 
            w-full
            text-[16px] 
            text-white
            font-medium 
            uppercase
            bg-black
            lg:w-[40%]'>
            Add Filters
        </button>
    )
}

export default FilterButton