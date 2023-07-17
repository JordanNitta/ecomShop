import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'
import { motion } from 'framer-motion'
const Searchbar = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [autoSearch, setAutoSearch] = useState('')
    const [products, setProducts] = useState([])

    console.log(autoSearch)
    // const handleSearch = () => {
    //     setOpenSearch(!openSearch)
    // }
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/all/products');
            setProducts(response.data);
        };
        fetchProducts()
    }, []);
    console.log(products)
    return (
        <>
            <div className='flex items-center'>
                <span className='hidden lg:block relative left-7'><AiOutlineSearch size={20} color='grey' /></span>
                <input type="text" className='hidden lg:block lg:text-[16px] sm:py-0 lg:px-30 lg:pl-10 lg:pr-10 lg:border-2 lg:leading-8 focus:outline-none' placeholder='Search' onChange={(e) => setAutoSearch(e.target.value)} />
            </div>
            {/* <div className='w-full h-[400px] absolute top-20 bg-white'>
                {products.filter((product) => {
                    return autoSearch.toLowerCase() === "" ? product : product.name.toLowerCase().includes(autoSearch)
                }).map((product) => (
                    <ul key={product._id}>
                        <li>{product.name}</li>
                        <li>{product.model}</li>
                        <li>{product.brand}</li>
                        <img src={product.image} className='w-[100px]'/>
                    </ul>
                ))}
            </div> */}
        </>
    )
}

export default Searchbar
