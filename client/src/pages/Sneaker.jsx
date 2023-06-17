import React, {} from 'react';
import Header from '../components/Wrapper/Header';
import Container from '../components/Wrapper/Container';
import Accordian from '../components/Accordian/Accordian';
import Card from '../components/Card/Card';
const Sneaker = () => {
    
    return (
        <>
            <Header>
                <div className='flex flex-col px-5 lg:mx-auto lg:items-center lg:w-[700px] lg:text-center'>
                    <h1 className='uppercase text-[24px] font-bold'>Shop All Sneakers</h1>
                    <p className='mt-4 text-[14px] font-light text-gray-500'>The vault goes deep at Flight Club. Shop for new releases from must-have names like Air Jordan, Nike, New Balance and Yeezy, along with the latest collaborations from brands like Vans, Reebok, Converse, ASICS, and more. </p>
                </div>
            </Header>
            <Container>
                <div className='flex flex-col w-[20%]'>
                    <h3>Filter</h3>
                    <Accordian />
                </div>
                <div className="w-full">
                    <div className='flex justify-between'>
                        <h1 className="uppercase text-[14px] font-bold">Results</h1>
                        <h1 className="uppercase text-[14px] font-bold">Sort By Relevance</h1>
                    </div>
                    <div className='mt-5'>
                        <Card />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Sneaker;