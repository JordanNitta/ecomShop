import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const SizesAccordian = ({ products, handleFilterSizes }) => {
    const [open, setOpen] = useState(false)
    const [selectedSize, setSelectedSize] = useState([])
    // const [filterSizes, setFilterSizes] = useState([])

    const sizes = [
        2, 2.5, 3, 3.5, 4, 4.5, 5,
        5.5, 6, 6.5, 7, 7.5, 8, 8.5,
        9, 9.5, 10, 10.5, 11, 11.5,
        12, 12.5, 13, 13.5, 14, 14.5,
        15, 15.5, 16, 16.5, 17, 17.5,
        18, 18.5, 19, 19.5, 20
    ]

    // console.log(products)

    const handleSelectedSize = (e, idx) => {
        const sizesCopy = [...selectedSize];
        if(sizesCopy[idx]){
            sizesCopy[idx] = undefined
        }
        else{
            sizesCopy[idx] = sizes[idx];
        }
        setSelectedSize(sizesCopy);
        handleFilterSizes(sizes[idx]);
    };

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className='w-full bg-white mt-5' id="filter-boxes" onClick={handleOpen}>
                <div className='flex justify-between p-3'>
                    <h1 className='text-mainColor text-[14px] font-medium uppercase'>Sizes</h1>
                    <span>
                        {open ? <AiOutlineUp size={18} /> : <AiOutlineDown size={18} />}
                    </span>
                </div>
            </div>
            {open ? (
                <div className='p-3 grid grid-cols-5 gap-[5px]' id='filter-boxes'>
                    {sizes.map((size, idx) => (
                        <div key={idx} className=''>
                            <button htmlFor="model" onClick={(e) => handleSelectedSize(e, idx)} className={!selectedSize.includes(size) ? 
                            'font-style text-[14px] text-mainColor  flex justify-center items-center text-light border-[1px] border-gray-200 p-3 w-[40px] h-[40px]' : 
                            'font-style text-[14px] text-mainColor  flex justify-center items-center text-light border-[1px] border-gray-500 p-3 w-[40px] h-[40px]'} >{size}</button>
                        </div>
                    ))}
                </div>
            ) : ''}
        </>
    )
}

export default SizesAccordian
