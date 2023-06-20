import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Wrapper/Container'
import Button from '../components/Button/Button'
import ShippingAccordian from '../components/Accordian/ShippingAccordian'
import SizeAccordian from '../components/Accordian/SizeAccordian'
const OneProduct = ({selectedSize, handleBorder}) => {
    const { id } = useParams()
    // const [selectedSize, setSelectedSize] = useState(null)

    // const handleBorder = (size) => {
    //     setSelectedSize(size);
    // }

    const [product, setProducts] = useState({})
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`http://localhost:8000/api/product/${id}`);
            console.log(response.data)
            setProducts(response.data);
        };
        fetchProducts()
    }, [id]);

    return (
        <div className=' bg-white pt-[40px] lg:px-[120px]'>
            <div className='px-5 md:px-10'>
                    <h1 className='text-[16px] font-500 text-gray-500 lg:hidden'>{product.brand}</h1>
                    <h1 className="text-[30px] font-semibold text-black lg:hidden">{product.name}</h1>
            </div>
            <div className='flex-col lg:flex-row lg:flex'>
                <div className='flex justify-center lg:w-full lg:block'>
                    <img src={product.image} alt={product.name} width={650} />
                </div>
                <div className='flex justify-center mt-[30px] lg:flex-col lg:w-[50%]'>
                    {/* <h1 className='hidden lg:block lg:text-[16px] lg:font-500 lg:text-gray-500'>{product.brand}</h1> */}
                    {/* <h1 className="hidden lg:block lg:mb-2 lg:text-[30px] lg:font-semibold lg:text-black">{product.name}</h1> */}
                    <div className='flex flex-col w-[80%] md:justify-center md:items-center md:w-[50%] gap-5 lg:items-start lg:w-full'>
                    <h1 className='hidden lg:block lg:text-[16px] lg:font-500 lg:text-gray-500'>{product.brand}</h1>
                    <h1 className="hidden lg:block lg:mb-2 lg:text-[30px] lg:font-semibold lg:text-black ">{product.name}</h1>
                        <h1 className='text-[16px] upper font-medium text-left'>Select a Size</h1>
                        {product && product.size ? (
                            <div className='hidden lg:grid lg:grid-cols-5 lg:gap-[5px] lg:mt-3'>
                                {product.size.map((size, index) => (
                                    <button
                                    className={selectedSize === size ? 'font-style text-[14px] font-semibold border-[1px] border-black w-[100px]' : 'w-[80px] font-style text-[14px] font-semibold border-[1px] border-gray-200 p-3'}
                                    onClick={() => handleBorder(size)}
                                    key={index}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            ''
                            )}
                        <div className='w-full'>
                            <SizeAccordian product={product} />
                        </div>
                        <h1 className='hidden lg:block'>Buy New</h1>
                        <Button product={product}>${product.price}</Button>
                        <p className='text-[12px] text-[#333] font-normal lg:w-full'>Shopping from the United States. Applicable costs included with no addition charge upon delivery</p>
                        <div className='py-[30px] w-full'>
                            <h1>About Products</h1>
                            <p className='mt-3 text-[12px] text-[#333] font-normal'>{product.description}</p>
                            <h1 className='mt-3'>Color</h1>
                            <p className='mt-3 text-[12px] text-[#333] font-normal'>{product.color}</p>
                        </div>
                        <div className='w-full'>
                            <ShippingAccordian />
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    // <div className='bg-white lg:px-[150px] xl:px-[200px]'>
    //     <div className='px-5 md:px-10'>
    //             <h1 className='text-[16px] font-500 text-gray-500 lg:hidden'>{product.brand}</h1>
    //             <h1 className="text-[30px] font-semibold text-black lg:hidden">{product.name}</h1>
    //     </div>
    //     <div className='flex flex-col justify-center items-center sm:justify-center lg:flex-row lg:justify-between lg:items-center'>
    //             <img src={product.image} alt={product.name} width={500}/>
    //         {/* Make sure to take off width full */}
    //         <div className='lg:ml-[50px] space-y-5 w-full'>
    //             <h1 className='hidden lg:block lg:text-[16px] lg:font-500 lg:text-gray-500'>{product.brand}</h1>
    //             <h1 className="hidden lg:block lg:mb-2 lg:text-[30px] lg:font-semibold lg:text-black">{product.name}</h1>
    //             <h1 className='text-[16px] upper font-semibold'>Select a Size</h1>
    //             <div className=''>
    //                 {product && product.size ? (
    //                     <div className='hidden lg:grid lg:grid-cols-5 lg:gap-[5px] lg:mt-3 '>
    //                         {product.size.map((size, index) => (
    //                             <button
    //                                 className={selectedSize === size ? 'font-style text-[14px] font-semibold border-[1px] border-black p-3' : 'font-style text-[14px] font-semibold border-[1px] border-gray-200 p-3'}
    //                                 onClick={() => handleBorder(size)}
    //                                 key={index}
    //                             >
    //                                 {size}
    //                             </button>
    //                         ))}
    //                     </div>
    //                 ) : (
    //                     ''
    //                 )}
    //                 <SizeAccordian product={product}/>
    //             </div>
    //             <div className='flex flex-col gap-3 items-center lg:flex-col justify-center lg:items-start '>
    //                 <h1 className='hidden lg:block'>Buy New</h1>
    //                 <Button product={product}/>
    //                 <p className='w-[80%] text-[12px] text-[#333] font-normal md:w-[50%] lg:w-full'>Shopping from the United States. Applicable costs included with no addition charge upon delivery</p>
    //             </div>                   
    //             <div className='flex flex-col ml-'>
    //                 <h1 className='upper'>About This Product</h1>
    //                 <p className='text-[12px] text-[#333] font-normal'>{product.description}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default OneProduct
