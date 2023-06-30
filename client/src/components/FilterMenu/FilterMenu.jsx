import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const FilterMenu = () => {
    const [closeMenu, setCloseMenu] = useState(false)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
        console.log(setCloseMenu)
    }
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen z-50 lg:hidden ${closeMenu ? 'hidden' : ''}`} style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
            <div className='p-3 bg-white'>
                <AiOutlineClose onClick={handleCloseMenu} size={30} className='cursor-pointer text-main ml-1 lg:hidden text-gray-500' />
            </div>
            <div className='flex flex-col pt-3 gap-[10px] w-full'>
                {/* <div className='p-3 h-[55px]' id='filter-boxes'>

                </div> */}
                <div className='p-3 h-[55px] flex justify-between items-center w-full' id='filter-boxes' onClick={handleOpen}>
                    <div>
                        <p>Model</p>
                    </div>
                    <div>
                        <span> {open ? <AiOutlineUp size={18} /> : <AiOutlineDown size={18} />}</span>
                    </div>
                </div>
                {/* <div className='p-3 h-[55px]' id='filter-boxes'>

                </div>
                <div className='p-3 h-[55px]' id='filter-boxes'>

                </div>
                <div className='p-3 h-[55px]' id='filter-boxes'>

                </div>
                <div className='p-3 h-[55px]' id='filter-boxes'>

                </div> */}
            </div>
        </div>

    )
}

export default FilterMenu
