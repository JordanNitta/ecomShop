import React from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const HomePage = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/all/products');
            setProducts(response.data);
        };
        fetchProducts()
    }, []);
    return (
        <div className='h-screen w-full'>
            <div className="top-0 left-0 w-full h-screen z-10 flex justify-start items-center bg-no-repeat bg-cover sm:bg-center" style={{ backgroundImage: "url('https://cms-cdn.flightclub.com/3000/88afb62ea351-e62b-ee11-32c1-0c8e687d.jpg')" }}>
                <div className='flex flex-col'>
                    <h1 className='lg:text-[50px] text-white font-bold ml-10'>AIR FOAMPOSITE ONE <br></br>'METALLIC RED' 2023</h1>
                    <a href="" className='ml-10 mt-5'>Shop Now</a>
                </div>
            </div>
            <div className='pt-[80px] pl-[100px] pr-[100px]'>
                <div>
                    <h1 className='font-bold text-mainColor text-[30px]'>Nike Dunks</h1>
                    <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-3'>
                        {products.map((product) => {
                            const { _id, name, image, price, brand } = product;
                            return (
                                <Link key={_id} to={`/products/${_id}`} className='pointer  bg-white '>
                                    <div href="#" className='p-5'>
                                        <img className="rounded-md" src={image} />
                                    </div>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-[14px] font-semibold text-gray-500">{brand.dunk}</h5>
                                        <h5 className="mb-2 text-[14px] font-semibold text-black">{name}</h5>
                                        <h5 className="text-[14px] font-bold text-black">${price}</h5>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
