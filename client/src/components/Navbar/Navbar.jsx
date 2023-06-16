import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/Img/Logo.png'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [hover, setHover] = useState(false)
    const navLinks = [
        { title: 'Sneakers', URL: '/sneakers' },
        { title: 'FC Apparel', URL: '/apparel' },
        { title: 'Stores', URL: '/stores' },
        { title: 'Account', URL: '/register' },
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    localStorage.getItem('user')



    return (
        <>
            <div className='h-[76px] border-b-[1px] flex justify-between px-4'>
                <div className='flex items-center justify-between '>
                    <Link to='/'>
                        <img src={Logo} alt="" className='cursor-pointer w-[100px] lg:w-[160px]' />
                    </Link>
                    <Searchbar />
                </div>
                <div className='hidden lg:flex lg:justify-end lg:items-center'>
                    {navLinks.map((link, index) => (
                        <ul key={index} className='lg:mx-3'>
                            <li>
                                <Link to={link.URL}>{link.title}</Link>
                            </li>
                        </ul>
                    ))}
                </div>
                <div onClick={handleMenu} className='lg:hidden my-auto'>
                    {showMenu ? <AiOutlineMenu size={30} className='cursor-pointer text-main ml-1 lg:hidden' /> : <AiOutlineClose size={30} className='cursor-pointer text-main ml-1 lg:hidden' />}
                </div>
            </div>
        </>

    )
}

export default Navbar
