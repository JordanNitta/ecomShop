import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Searchbar = ( { handleScroll }) => {
    const navigate = useNavigate()
    const [openSearch, setOpenSearch] = useState(false)
    const [autoSearch, setAutoSearch] = useState('')
    const [products, setProducts] = useState([])
    const closeSearchRef = useRef()

    console.log(autoSearch)

    // Handle search bar when a user clicks it
    const handleOpenSearch = () => {
        setOpenSearch(!openSearch)
    }

    // Makes an api call to get the products 
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/all/products');
            setProducts(response.data);
        };
        fetchProducts()
    }, []);
    console.log(products)

    // Handle when a user searches and hits enter
    const handleSearch = (e) => {
        const filterBySearch = products.filter((product) => autoSearch.toLowerCase() === "" ? product : product.name.toLowerCase().includes(autoSearch))
        if (e.key === 'Enter') {
            navigate({
                pathname: '/sneakers',
                search: `?${filterBySearch.map((product) => `products=${product._id}`).join('&')}`
            })
        }
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(closeSearchRef.current && !closeSearchRef.current.contains(e.target)) {
                setOpenSearch(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)

        return (() => {
            document.removeEventListener('mousedown', handleOutsideClick)
        })
    }, [])

    return (
        <>
            <div 
                ref={closeSearchRef}
                className={`flex items-center z-20 ${openSearch ? 'w-full bg-white absolute h-full border-b-[3px]' : ''} `}>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center'>
                        <span className='hidden md:block md:relative md:left-12'><AiOutlineSearch size={20} color='grey' /></span>
                        <input type="text" onClick={handleOpenSearch} 
                        className='bg-transparent ml-5 md:block md:text-[16px] sm:py-0 lg:px-30 md:pl-10 md:pr-10 md:border-2 md:leading-8 focus:outline-none '
                        placeholder='Search' 
                        style={{ border: openSearch ? 'none' : '' }} 
                        onKeyDown={handleSearch} 
                        onChange={(e) => setAutoSearch(e.target.value)} />
                    </div>
                    <div className='flex'>
                        {openSearch ? (
                            <div className=''>
                                <button onClick={handleOpenSearch} className='h-[76px] w-[90px] text-black' style={{ borderLeft: "3px solid rgb(234, 234, 234)"}}>Close</button>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {openSearch && ( // Show the bottom bar only when the search bar is open
            <AnimatePresence>
                <motion.div 
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 1 }}
                    transition={{ duration: .6}}
                    className='w-full h-screen space-y-1 overflow-y-auto md:h-screen lg:h-[600px] lg:flex lg:flex-col lg:flex-wrap absolute top-[4rem] bg-white  border-[rgb(234,234,234)] z-10'>
                        {openSearch &&
                            products
                                .filter((product) => autoSearch.toLowerCase() === '' ? product : product.name.toLowerCase().includes(autoSearch))
                                .slice(0, 8)
                                .map((product) => (
                                    <div className='px-5 h-[80px]'>

                                            <div className='flex items-center h-[80px] space-y-7 '>
                                                <img src={product.image} className='w-[100px]' />
                                                <h6 className='ml-12 text-black'>{product.name}</h6>
                                            </div>
                                    </div>
                            
                                ))}
                </motion.div>
            </AnimatePresence>
            )}
        </>
    )
}

export default Searchbar
