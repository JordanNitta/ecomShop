import { useContext, useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/Img/Logo.png'
import Searchbar from './Searchbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../context/UserContext'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [scrollBg, setScrollBg] = useState(false)

    const { loggedUser, setLoggedUser } = useContext(UserContext)
    const navLinks = [
        { title: 'Sneakers', URL: '/sneakers' },
        { title: 'FC Apparel', URL: '/apparel' },
        { title: 'Stores', URL: '/stores' },
        { title: 'Account', URL: '/register' },
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleLoggedOut = () => {
        axios.delete("http://localhost:8000/api/logOut", { withCredentials: true })
            .then(() => {
                setLoggedUser(undefined)
                navigate('/')
            })
            .catch((err) => {
                console.log(err, "Can't log out")
            })
    } 

    useEffect(() => {
        axios.get("http://localhost:8000/api/logged/user", { withCredentials: true })
        .then((res) => {
            setLoggedUser(res.data)
        })
        .catch(() => {

        })
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
            <div className={`h-[76px] flex justify-between fixed z-50 w-full ${scrollBg ? 'bg-white' : 'bg-transparent'}`}>
                <div className='flex items-center w-[45%]'>
                    <Searchbar/>
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
                    <h6 className='text-black'>{loggedUser?.firstName}</h6>
                </div>
                <button onClick={handleLoggedOut}>LogOut</button>

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
