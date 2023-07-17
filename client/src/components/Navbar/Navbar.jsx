import { useContext, useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/Img/Logo.png'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [scrollBg, setScrollBg] = useState(false)
    const navLinks = [
        { title: 'Sneakers', URL: '/sneakers' },
        { title: 'FC Apparel', URL: '/apparel' },
        { title: 'Stores', URL: '/stores' },
        { title: 'Account', URL: '/register' },
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY > 800
            setScrollBg(scroll)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className={`h-[76px] flex justify-between px-4 fixed z-50 w-full ${scrollBg ? 'bg-white' : 'bg-transparent'}`}>
                <div className='flex items-center w-[45%]'>
                    <Searchbar />
                </div>
                <div className='hidden lg:flex lg:justify-between lg:items-center w-[60%]'>
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="" className='cursor-pointer w-[100px] lg:w-[160px]' />
                        </Link>
                    </div>
                    <div className='flex'>
                    {navLinks.map((link, index) => (
                        <ul key={index} className='lg:mx-3'>
                            <li>
                                <Link to={link.URL} className={`text-[16px] font-medium ${scrollBg ? 'text-black' : 'text-white'}`}>{link.title}</Link>
                            </li>
                        </ul>
                    ))}
                    </div>
                </div>
                <div onClick={handleMenu} className='lg:hidden my-auto'>
                    {showMenu ? <AiOutlineMenu size={30} className='cursor-pointer text-main ml-1 lg:hidden' /> : <AiOutlineClose size={30} className='cursor-pointer text-main ml-1 lg:hidden' />}
                </div>
            </div>
        </>
        // <>
        //     <div className='h-[76px] bg-white flex justify-between px-4'>
        //         <div className='flex items-center w-[50%]'>
        //             {/* <Link to='/'>
        //                 <img src={Logo} alt="" className='cursor-pointer w-[100px] lg:w-[160px]' />
        //             </Link> */}
        //             <Searchbar />
        //         </div>
        //         <div className='flex items-center '>
        //         <Link to='/'>
        //                 <img src={Logo} alt="" className='cursor-pointer w-[100px] lg:w-[160px]' />
        //             </Link>
        //         </div>
        //         <div className='hidden lg:flex lg:justify-end lg:items-center lg:w-[50%]'>
        //             {navLinks.map((link, index) => (
        //                 <ul key={index} className='lg:mx-3'>
        //                     <li>
        //                         <Link to={link.URL}>{link.title}</Link>
        //                     </li>
        //                 </ul>
        //             ))}
        //         </div>
        //         <div onClick={handleMenu} className='lg:hidden my-auto'>
        //             {showMenu ? <AiOutlineMenu size={30} className='cursor-pointer text-main ml-1 lg:hidden' /> : <AiOutlineClose size={30} className='cursor-pointer text-main ml-1 lg:hidden' />}
        //         </div>
        //     </div>
        // </>


    )
}

export default Navbar
