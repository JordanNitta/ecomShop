import React from 'react'
import Logo  from '../assets/Img/Logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
    <>
        <div className='w-full py-[50px] px-[25px] bg-black'>
            {/* <div> */}
                <img src={Logo} alt="Store-logo" className='h-[40px]'/>
            {/* </div> */}
            <div className='md:flex md:flex-row pl-[19px] justify-between mt-12'>
                <div className='flex flex-col'>
                    <h1 className='text-white'>Shoes</h1>
                    <ul className='space-y-4 mt-5'>
                        <li>
                            <Link className='text-grey text-[16px]'>Air Jordans</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Nike Dunks</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>New Balance 550</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col mt-5'>
                    <h1 className='text-white'>Appareal</h1>
                    <ul className='space-y-4 mt-5'>
                        <li>
                            <Link className='text-grey text-[16px]'>Our History</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Stores</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Shipping & Returns</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Support</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Instagram</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Facebook</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className='mt-5 sm:m-0 md:m-0 lg:m-0'>
                    <h1 className='text-white text-[16px]'>Account</h1>
                    <ul className='space-y-4 mt-5'>
                        <li>
                            <Link className='text-grey text-[16px]'>My Account</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Track My Order</Link>
                        </li>
                        <li>
                            <Link className='text-grey text-[16px]'>Your Privacy Choices</Link>
                        </li>
                    </ul>
                </div>
                <div className='mt-5 sm:m-0 md:m-0 lg:m-0'>
                    <h1 className='text-white text-[16px]'>About Us</h1>
                    <ul className='space-y-4 mt-5'>
                            <li>
                                <Link className='text-grey text-[16px]'>Our History</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Stores</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Shipping & Returns</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Support</Link>
                            </li>
                       
                            <li>
                                <Link className='text-grey text-[16px]'>Instagram</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Facebook</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Twitter</Link>
                            </li>
                    </ul>
                </div>
                <div className='mt-5 sm:m-0 md:m-0 lg:m-0'>
                    <h1 className='text-white text-[16px]'>Sign Up For News</h1>
                </div>
            </div>
            <div className='w-full mt-10 bg-black' style={{borderTop: '1px solid rgb(48, 48, 48)'}}>
                <div className='space-y-5 lg:flex lg:justify-between lg:items-center mt-5'>
                    <div className=''>
                        <ul className='flex space-x-8 md:items-center md:justify-center'>
                            <li>
                                <Link className='text-grey text-[16px]'>Terms</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Privacy</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Press</Link>
                            </li>
                            <li>
                                <Link className='text-grey text-[16px]'>Jobs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:flex md:justify-center md:items-center mt-2'>
                        <h6 className='text-grey text-[16px]'>© 2023 Flight Club New York LLC. All Rights Reserved</h6>
                    </div>
                    <div className='md:flex md:justify-center md:items-center mt-2'>
                        <Link to="https://www.jordannitta.com" target="_blank" rel="noopener noreferrer" className='text-grey text-[16px]'>Made By Jordan Nitta-Rodrigues</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
