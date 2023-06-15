import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Searchbar = () => {
    const [openSearch, setOpenSearch] = useState(false)

    const handleSearch = () => {
        setOpenSearch(!openSearch)
    }
    return (
        <div className='h-full flex items-center' style={{flex: '1, 1, 45%'}}>
                <span className='hidden lg:block lg:absolute lg:top-7 lg:left-8 '><AiOutlineSearch size={20} color='grey'/></span>
                <input type="text" onClick={handleSearch}className='lg:text-[16px] sm:py-0 lg:px-30 lg:pl-10 lg:pr-10 lg:border-2 lg:leading-8 focus:outline-none' placeholder='Search'/>
        </div>
    )
}

export default Searchbar
