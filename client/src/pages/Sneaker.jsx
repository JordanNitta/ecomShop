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
import SizesAccordian from '../components/Accordian/SizesAccordian';
const Sneaker = () => {
    const [modelArray, setModelArray] = useState([])
    const [filterSizes, setFilterSizes] = useState([])
    const [filterBrand, setFilterBrand] = useState([])
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
    }, [setTotalProducts]);

    useEffect(() => {
        setTotalProducts(modelArray.length)
    },[modelArray])

    // Takes a param called model
    const handleFilterByModel = (model) => {
        // Checks to see if filterByModel array includes a selected model
        if(modelArray.includes(model)) {
            // If the selected model is already in the filterByModel 
            // array it removes if from the model array
            setModelArray(modelArray.filter((removeModel) => model !== removeModel))
        } else{ 
            // If the selected model isn't in the array it add the model to the array
            setModelArray([...modelArray, model])
        }
    }

    const handleFilterSizes = (size) => {
        if(filterSizes.includes(size)){
            setFilterSizes(filterSizes.filter((removeSize) => size !== removeSize))
        } else {
            setFilterSizes([...filterSizes, size])
        }
    }

    const handleFilterBrand = (brand) => {
        if(filterBrand.includes(brand)){
            setFilterBrand(filterBrand.filter((removeBrand) => brand !== removeBrand))
        } else {
            setFilterBrand([...filterBrand, brand])
        }
    }

    const handleFilterPopup = () => {
        setFilterPopup(!filterPopup)
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
                <div className='flex flex-col lg:w-[30%] '>
                    <h3>Filter</h3>
                    {/* <FilterButton openMenu={handleFilterPopup}/>  */}
                    {filterPopup ? <FilterMenu products={products} /> : ''}
                    <ModelAccordian products={products} handleFilterByModel={handleFilterByModel}/>
                    <BrandAccordian products={products} handleFilterBrand={handleFilterBrand}/>
                    <SizesAccordian products={products} handleFilterSizes={handleFilterSizes}/>
                </div>
                <div className="w-full">
                    <div className='flex justify-between'>
                        <h1 className="uppercase text-[14px] font-bold">Results {totalProducts}</h1>
                        <h1 className="hidden lg:block lg:uppercase lg:text-[14px] lg:font-bold">Sort By Relevance</h1>
                    </div>
                    <div className='mt-5 md:w-full'>
                        <Card products={modelArray.length || filterSizes.length || filterBrand.length ? 
                        products
                        .filter((product) => !filterBrand.length || filterBrand.includes(product.brand))
                        .filter((product) => !filterSizes.length || filterSizes.some(size => product.size.includes(size)))
                        .filter((product) => !modelArray.length || modelArray.includes(product.model))
                        : products}
                        id={id}/>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sneaker;