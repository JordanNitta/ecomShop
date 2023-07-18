import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
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
                        <span className='hidden lg:block relative left-7'><AiOutlineSearch size={20} color='grey' /></span>
                        <input type="text" onClick={handleOpenSearch} 
                        className='hidden lg:block lg:text-[16px] sm:py-0 lg:px-30 lg:pl-10 lg:pr-10 lg:border-2 lg:leading-8 focus:outline-none'
                        placeholder='Search' 
                        style={{ border: openSearch ? 'none' : '' }} 
                        onKeyDown={handleSearch} 
                        onChange={(e) => setAutoSearch(e.target.value)} />
                    </div>
                    <div className='flex'>
                        {openSearch ? (
                            <div className=''>
                                <button onClick={handleOpenSearch} className='h-[76px] w-[90px]' style={{ borderLeft: "3px solid rgb(234, 234, 234)"}}>Close</button>
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
                    className='w-full h-[400px] absolute top-[4rem] bg-white  border-[rgb(234,234,234)] z-10'>
                    {openSearch &&
                        products
                            .filter((product) => autoSearch.toLowerCase() === '' ? product : product.name.toLowerCase().includes(autoSearch))
                            .map((product) => (
                                <ul key={product._id}>
                                    <div className='flex items-center'>
                                        <img src={product.image} className='w-[100px]' />
                                        <li className='ml-5'>{product.name}</li>
                                    </div>
                                    <li>{product.model}</li>
                                    <li>{product.brand}</li>
                                </ul>
                            ))}
                </motion.div>
            </AnimatePresence>
            )}
        </>
    )
}

export default Searchbar
