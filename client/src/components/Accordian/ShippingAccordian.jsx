import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
const ShippingAccordian = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
    <>
        <div className='flex flex-col '>
            <button
            // w-[80%]
            className='flex justify-between items-center font-style text-[14px] font-semibold w-full  h-[40px]'
            onClick={handleOpen} >
                <span className='uppercase font-semibold font-500'>Shipping and returns </span>
                <span>
                    {open ? <AiOutlineUp size={18}/> : <AiOutlineDown size={18}/>}
                </span>
            </button>
            { open ? 
                <div className='flex flex-col'>
                    <div className='mt-2'>
                        <h2>Cancelations</h2>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>For sneakers, you may cancel your order within 3 hours of placing it or before it is confirmed by the seller - whichever comes first. If 3 hours have passed from when you placed the order and/or the seller has already confirmed the order, then the order cannot be canceled. If neither have occurred, you can cancel your order first by accessing it via “Track My Order” or “My Account,” clicking “Cancel Order” and following the instructions.</p>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>If you checked out as a guest, you will need to create a Flight Club account.</p>
                    </div>
                    <div className='mt-3'>
                        <h2>Delivery</h2>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>Delivery and processing speeds vary by pricing options. The following shipping estimates apply only to the contiguous US and exclude deliveries to PO boxes and military bases. All delivery times are estimates and are not guaranteed. Shipments may be affected by weather-related delays, carrier limitations or other events outside of our control.</p>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>"Lowest Price" orders may ship to Flight Club first for verification and typically take 7-10 business days (M-F, excluding holidays) to reach you. It will typically take 3-5 business days (M-F, excluding holidays) for a "Fastest To You" item, ordered before 2 PM ET with standard shipping, to be delivered.</p>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>Estimated delivery times do not apply to international orders. International customers are responsible for any additional fees or taxes after an item ships.</p>
                    </div>
                    <div className='mt-3'>
                        <h2>Returns</h2>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>All sales with Flight Club are final.</p>
                        <p className='text-[12px] text-[#333] font-normal mt-2'>If you have any questions or concerns with regard to sizing or condition of a specific product on our site, please <a href='' className='text-blue-700 underline'>contact us</a> before purchasing.</p>
                    </div>
                </div>
                :
                ""
            }
        </div>
    </>
    )
}

export default ShippingAccordian
