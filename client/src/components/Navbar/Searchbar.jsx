import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { motion } from 'framer-motion'
const Searchbar = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [autoSearch, setAutoSearch] = useState('')

    console.log(autoSearch)
    const handleSearch = () => {
        setOpenSearch(!openSearch)
    }
    return (
        <div className='flex items-center'>
            <span className='hidden lg:block relative left-7'><AiOutlineSearch size={20} color='grey'/></span>
            <input type="text" className='hidden lg:block lg:text-[16px] sm:py-0 lg:px-30 lg:pl-10 lg:pr-10 lg:border-2 lg:leading-8 focus:outline-none' placeholder='Search' onClick={handleSearch} onChange={(e) => setAutoSearch(e.target.value)}/>
            
        </div>
    )
}

export default Searchbar
