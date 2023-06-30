import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Wrapper/Header';
import Accordian from '../components/Accordian/Accordian';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import FilterButton from '../components/Button/FilterButton';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import ModelAccordian from '../components/Accordian/ModelAccordian';
import BrandAccordian from '../components/Accordian/BrandAccordian';
const Sneaker = () => {
    const [filterByModel, setFilterByModel] = useState([])
    const [filterPopup, setFilterPopup] = useState(false)
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0);
    const { id } = useParams

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/all/products');
            setProducts(response.data);
            setTotalProducts(response.data.length)
        };
        fetchProducts()
    }, []);

    const handleFilterByModel = (model) => {
        if(filterByModel.includes(model)) {
            setFilterByModel(filterByModel.filter((removeModel) => model !== removeModel))
        } else{ 
            setFilterByModel([...filterByModel, model])
            setTotalProducts(filterByModel)
        }
    }

    const handleFilterPopup = () => {
        setFilterPopup(!filterPopup)
        console.log('hi')
    }
    return (
        <>
            <Header>
                <div className='flex flex-col px-5 lg:mx-auto lg:items-center lg:w-[700px] lg:text-center'>
                    <h1 className='uppercase text-[24px] font-bold'>Shop All Sneakers</h1>
                    <p className='mt-4 text-[14px] font-light text-gray-500'>The vault goes deep at Flight Club. Shop for new releases from must-have names like Air Jordan, Nike, New Balance and Yeezy, along with the latest collaborations from brands like Vans, Reebok, Converse, ASICS, and more. </p>
                </div>
            </Header>
            <div className='w-full flex lg:px-[160px] gap-[30px]'>
                <div className='flex flex-col lg:w-[30%]'>
                    <h3>Filter</h3>
                    {/* <FilterButton openMenu={handleFilterPopup}/>  */}
                    {filterPopup ? <FilterMenu products={products} /> : ''}
                    <ModelAccordian products={products} handleFilterByModel={handleFilterByModel}/>
                    <BrandAccordian products={products}/>
                </div>
                <div className="w-full">
                    <div className='flex justify-between'>
                        <h1 className="uppercase text-[14px] font-bold">Results {totalProducts}</h1>
                        <h1 className="hidden lg:block lg:uppercase lg:text-[14px] lg:font-bold">Sort By Relevance</h1>
                    </div>
                    <div className='mt-5 md:w-full'>
                        <Card products={filterByModel.length ? products.filter((product) => 
                            filterByModel.some((model) => model === product.model) 
                        ) : products} id={id}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sneaker;