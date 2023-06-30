import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const BrandAccordian = ({ products }) => {
    const [selectedModel, setSelectedModel] = useState(false)
    const [filterProducts, setFilterProducts] = useState([...products])
    // State hook for each brand checkbox
    // console.log(products, 'hi')

    const brands = ['nike', 'adidas']

    const handleFilterProducts = (e) => {
        // console.log(e.target.checked, e.target.value)
        // Set 
        if(e.target.checked){
            setFilterProducts(filterProducts.filter(product => {
                return product.brand === e.target.value
            }))
        } else{
            setFilterProducts([...products])
        }
    }

    const [open, setOpen] = useState(false)
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
                        <div key={idx} >
                            <input 
                                type="checkbox" 
                                onChange={(e) => {handleFilterProducts(e)}}
                                value={'brand'}
                            />
                            <label htmlFor="model" className='ml-3 text-[12px] text-mainColor'>{brand}</label>
                        </div>
                    ))}
                </div>
            ) : ''}
        </>
    )
}

export default BrandAccordian