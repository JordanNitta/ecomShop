import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const BrandAccordian = ({ products, handleFilterBrand }) => {
    const [selectedBrand, setSelectedBrand] = useState([])
    const [open, setOpen] = useState(false)

    const brands = ['Nike', 'Adidas']

    const handleSelectedBrand = (e, idx) => {
        const brandCopy = [...selectedBrand]
        brandCopy[idx] = e.target.checked
        setSelectedBrand(brandCopy)
        handleFilterBrand(brands[idx])
    }

    
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className='w-full bg-white mt-5' id="filter-boxes" onClick={handleOpen}>
                <div className='flex justify-between p-3'>
                    <h1 className='text-mainColor text-[14px] font-medium uppercase'>Brand</h1>
                    <span>
                        {open ? <AiOutlineUp size={18} /> : <AiOutlineDown size={18} />}
                    </span>
                </div>
            </div>
            {open ? (
                <div className='p-3' id='filter-boxes'>
                    {brands.map((brand, idx) => (
                        <div key={idx}>
                            <input type="checkbox" checked={selectedBrand[idx]} onChange={(e) => handleSelectedBrand(e, idx)}/>
                            <label htmlFor="brand" className='ml-3 text-[12px] text-mainColor'>{brand}</label>
                        </div>
                    ))}
                </div>
            ) : ''}
        </>
    )
}

export default BrandAccordian