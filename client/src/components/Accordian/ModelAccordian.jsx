import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const ModelAccordian = ({ products, handleFilterByModel }) => {
    // Need a state for the selected values
    const [selectedModels, setSelectedModels] = useState([])
    
    const handleSelectedModel = (e, idx) => {
        const modelsCopy = [...selectedModels]
        modelsCopy[idx] = e.target.checked
        setSelectedModels(modelsCopy)
        handleFilterByModel(products[idx].model)
        console.log('Selected Models:', selectedModels);
    }

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='w-full bg-white mt-5' id="filter-boxes" onClick={handleOpen}>
                <div className='flex justify-between p-3'>
                    <h1 className='text-mainColor text-[14px] font-medium uppercase'>Model</h1>
                    <span>
                        {open ? <AiOutlineUp size={18} /> : <AiOutlineDown size={18} />}
                    </span>
                </div>
            </div>
            {open ? (
                <div className='p-3' id='filter-boxes'>
                    {products.map((product, idx) => (
                        <div>
                            <input type="checkbox" checked={selectedModels[idx]} onChange={(e) => handleSelectedModel(e, idx)}/>
                            <label htmlFor="model" className='ml-3 text-[12px] text-mainColor'>{product.model}</label>
                        </div>
                    ))}
                </div>
            ) : ''}
        </>
    )
}

export default ModelAccordian
