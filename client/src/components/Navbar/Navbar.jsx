import { useContext, useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../context/UserContext'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../../assets/Img/Logo.png'
import Searchbar from './Searchbar'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [scrollBg, setScrollBg] = useState(false)
    const navBarRef = useRef()
    const { loggedUser, setLoggedUser } = useContext(UserContext)
    // const navLinks = [
    //     { title: 'Sneakers', URL: '/sneakers' },
    //     { title: 'FC Apparel', URL: '/apparel' },
    //     { title: 'Stores', URL: '/stores' },
    //     { title: 'Account', URL: '/register' },
    // ]

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
            if (window.scrollY > 100) {
                navBarRef.current.style.backgroundColor = 'white'
                navBarRef.current.style.color = 'black'
            }
            else {
                navBarRef.current.style.backgroundColor = 'transparent'
                navBarRef.current.style.color = 'white'
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <>
            <div
                ref={navBarRef}
                className='h-[76px] flex justify-between fixed z-50 w-full'>
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
                        {/* {navLinks.map((link, index) => ( */}
                        <ul className='lg:mx-3 flex space-x-5'>
                            <li>
                                <Link to='/sneakers' className='text-[16px] font-medium'>Sneakers</Link>
                            </li>
                            <li>
                                <Link to='/apparel' className='text-[16px] font-medium'>FC Apparel</Link>
                            </li>
                            <li>
                                <Link to='/store' className='text-[16px] font-medium'>Store</Link>
                            </li>
                            <li>
                                <Link to='/account' className='text-[16px] font-medium'>Login</Link>
                            </li>
                            <li>
                                <Link to='/account' className='text-[16px] font-medium'>Sign Up</Link>
                            </li>
                        </ul>
                        {/* // ))} */}
                    </div>
                    {/* <h6 className='text-black'>{loggedUser?.firstName}</h6> */}
                </div>
                {/* <button onClick={handleLoggedOut}>LogOut</button> */}

                <motion.div 
                    onClick={handleMenu} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex justify-end right-0 absolute h-[76px] lg:hidden ${showMenu ? 'bg-white border-b-[3px] w-full z-30   border-[rgb(234,234,234)]' : ''}`}>
                    <div className='flex items-center '>
                        {showMenu ? (
                            <AiOutlineClose
                                size={30}
                                className='cursor-pointer text-main ml-1 text-black lg:hidden'
                            />
                            
                        ) : (
                            <AiOutlineMenu
                                size={30}
                                className='cursor-pointer text-main ml-1 text-black lg:hidden'
                            />

                        )}                   
                    </div>
                </motion.div>
                {showMenu && (
                    <motion.div
                        initial={{ y: -1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 0, opacity: 1 }}
                        transition={{ duration: .3 }}
                        className='fixed top-[76px] w-full h-full bg-white z-20'>
                        {/* Add your menu items here */}
                        <p className='text-black'>JI</p>
                        <p>2</p>
                        <p>3</p>
                    </motion.div>
                )}
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
