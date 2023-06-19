import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const SizeAccordian = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [openSizes, setOpenSizes] = useState(false)
    const outsideClick = useRef(null)

    const handleBorder = (size) => {
        setSelectedSize(size);
    }

    const handleOpenSizes = () => {
        setOpenSizes(!openSizes)
    }

    const handleClickOutside = (event) => {
        if (outsideClick.current && !outsideClick.current.contains(event.target)) {
            setOpenSizes(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <>
            {/* {product && product.size ? (
                <div className='grid grid-cols-5 gap-4 mt-3'>
                    {product.size.map((size, index) => (
                        <button
                            className={selectedSize === size ? 'font-style text-[14px] font-semibold border-[1px] border-black p-3' : 'font-style text-[14px] font-semibold border-[1px] border-gray-200 p-3'}
                            onClick={() => handleBorder(size)}
                            key={index}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            ) : (
                ''
            )} */}

            <div className='lg:hidden flex items-center justify-center '>
                <button
                    // w-[80%]
                    className='flex justify-between items-center font-style text-[14px] font-semibold border-[1px] border-black p-3 w-full h-[40px]'
                    onClick={handleOpenSizes} >
                        <span className='uppercase font-semibold font-500'>Size </span>
                        
                        <span>
                            {openSizes ? <AiOutlineUp size={18}/> : <AiOutlineDown size={18}/>}
                        </span>

                </button>
            </div>
            {openSizes ? (
                <motion.div
                    // ref={outsideClick}
                    className='fixed bottom-0 w-full h-[600px] right-0 left-0 bg-white lg:hidden z-50'
                    initial={{ opacity: 1, y: 400 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 400 }}
                    transition={{ duration: .3, ease: "easeIn" }}
                >
                    <div className='flex justify-between p-4 ' style={{ borderBottom: '3px solid rgb(249, 249, 249)' }}>
                        <h1 className='text-[16px] md:text-[18px] font-bold uppercase'>{product.name}</h1>
                        <AiOutlineClose size={25} className='cursor-pointer text-gray-500' onClick={handleOpenSizes} />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-[16px] upper font-semibold'>Select a Size</h1>
                    </div>
                    {product && product.size ? (
                        <div className='grid grid-cols-4 md:grid-cols-5 gap-2 p-4' style={{ borderBottom: '12px solid rgb(249, 249, 249)' }}>
                            {product.size.map((size, index) => (
                                <button
                                    className={selectedSize === size ? 'font-style text-[14px] font-semibold border-[1px] border-black p-3' : 'font-style text-[14px] font-semibold border-[1px] border-gray-200 p-3'}
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
                    <div className='p-4'>
                        <div className='flex justify-between'>
                            <h1 className='text-[16px] font-medium tracking-wide'>Buy New</h1>
                        </div>
                        <button
                            style={{ backgroundColor: 'rgb(233, 28, 35)' }}
                            className="w-full mt-5 text-white tracking-wider py-3 px-[200px] rounded-sm border-none cursor-pointer md:w-auto">
                            ${product.price}
                        </button>
                    </div>
                </motion.div>
            ) : ' '}

        </>
    )
}

export default SizeAccordian
