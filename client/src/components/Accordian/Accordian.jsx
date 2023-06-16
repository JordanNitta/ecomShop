import { useState } from 'react'

const Accordian = () => {
    const [open, setOpen] = useState(false);
    const [openSection2, setOpenSection2] = useState(false);
    const [openSection3, setOpenSection3] = useState(false);
    const [openSection4, setOpenSection4] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleToggleSection2 = () => {
        setOpenSection2(!openSection2);
    };

    const handleToggleSection3 = () => {
        setOpenSection3(!openSection3);
    };

    const handleToggleSection4 = () => {
        setOpenSection4(!openSection4);
    };
    return (
    <>
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="" data-inactive-classes="">
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={handleOpen} class="flex items-center justify-between font-bold text-left border-[1px] border-black" data-accordion-target="#accordion-flush-body-1" aria-expanded={open} aria-controls="accordion-flush-body-1">
                    <span className='text-main'>Models</span>
                    <svg data-accordion-icon className={`{${open ? 'w-6 h-6 rotate-180' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1" className={open ? 'overflow-hidden' : 'hidden'}>
                <div class="py-5 border-b border-gray-200 text-main ">
                    <ul className="text-main">
                        <li className='p-1'>
                            Javascript
                        </li>
                        <li className='p-1'>
                            Python
                        </li>
                        <li className='p-1'>
                            HTML
                        </li>
                        <li className='p-1'>
                            CSS
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>

    )
}

export default Accordian
