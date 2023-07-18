import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Searchbar = () => {
    const navigate = useNavigate()
    const [openSearch, setOpenSearch] = useState(false)
    const [autoSearch, setAutoSearch] = useState('')
    const [products, setProducts] = useState([])

    console.log(autoSearch)

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/all/products');
            setProducts(response.data);
        };
        fetchProducts()
    }, []);
    console.log(products)

    const handleSearch = (e) => {
        const filterBySearch = products.filter((product) => autoSearch.toLowerCase() === "" ? product : product.name.toLowerCase().includes(autoSearch))
        if (e.key === 'Enter') {
            navigate({
                pathname: '/sneakers',
                search: `?${filterBySearch.map((product) => `products=${product._id}`).join('&')}`
            })
        }
    }

    return (
        <>
            <div className={`flex items-center z-20 ${openSearch ? 'w-full bg-white absolute h-full border-b-[3px]' : ''} `}>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center'>
                        <span className='hidden lg:block relative left-7'><AiOutlineSearch size={20} color='grey' /></span>
                        <input type="text" onClick={handleOpenSearch} className='hidden lg:block lg:text-[16px] sm:py-0 lg:px-30 lg:pl-10 lg:pr-10 lg:border-2 lg:leading-8 focus:outline-none' placeholder='Search' onKeyDown={handleSearch} onChange={(e) => setAutoSearch(e.target.value)} />
                    </div>
                    <div className='flex'>
                        {openSearch ? (
                            <div className=''>
                                <button className='h-[76px] w-[90px]' style={{ borderLeft: "3px solid rgb(234, 234, 234)"}}>Close</button>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {openSearch && ( // Show the bottom bar only when the search bar is open
                <motion.div 
                    initial={{ y: -400, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: -0 }}
                    transition={{ duration: .8 }}
                    className='w-full h-[400px] absolute top-[4rem] bg-white  border-[rgb(234,234,234)] z-10'>
                    {autoSearch &&
                        products
                            .filter((product) => autoSearch.toLowerCase() === '' ? product : product.name.toLowerCase().includes(autoSearch))
                            .map((product) => (
                                <ul key={product._id}>
                                    <li>{product.name}</li>
                                    <li>{product.model}</li>
                                    <li>{product.brand}</li>
                                    <img src={product.image} className='w-[100px]' />
                                </ul>
                            ))}
                </motion.div>
            )}
        </>
    )
}

export default Searchbar
