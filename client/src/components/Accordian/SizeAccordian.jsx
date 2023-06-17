import { useState } from 'react'
import { motion } from 'framer-motion'
const SizeAccordian = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [openSizes, setOpenSizes] = useState(false)
    const handleBorder = (size) => {
        setSelectedSize(size);
    }
    const handleOpenSizes = () => {
        setOpenSizes(!openSizes)
    }

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

            <div className='w-full'>
                <button
                    className='font-style text-[14px] font-semibold border-[1px] border-black p-3 w-[70%] h-[35px]'
                    onClick={handleOpenSizes} >
                </button>
            </div>
            {openSizes ? (
                <motion.div
                    className='absolute bottom-0 w-full h-[450px] right-0 left-0 bg-black'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div>
                        <button>Size 1</button>
                        <button>Size 2</button>
                    </div>
                </motion.div>
            ) : null}

        </>
    )
}

export default SizeAccordian
