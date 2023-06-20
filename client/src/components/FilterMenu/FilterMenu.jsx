import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const FilterMenu = ( {products} ) => {
    const [closeMenu, setCloseMenu] = useState(false)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
        console.log(setCloseMenu)
    }
    return (
        <div className='fixed top-0 left-0 w-screen h-screen z-50 bg-white'>
            <div>
                <AiOutlineClose onClick={handleCloseMenu} size={30} className='cursor-pointer text-main ml-1 lg:hidden text-gray-500' />
            </div>
        </div>
    )
}

export default FilterMenu
