
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ShopByCategory = () => {



    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-center text-5xl text-teal-800'> Shop by category</h1>

            <Tabs className='text-center mt-6'>
                <TabList className='text-2xl text-purple-900'>
                    <Tab>Horse</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Cat</Tab>
                </TabList>
                <TabPanel className='mt-10'>
                    <div className='md:flex  md:items-center md:justify-center gap-6'>
                        {category
                            .filter(toy => toy.category === 'Horse').slice(0, 2)
                            .map((toy, index) => (
                                <div className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200" key={index}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl w-96 h-60" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-blue-600">{toy.name}</h2>
                                        <p className='text-green-700 font-normal'>Price: $<span >{toy.price}</span> </p>

                                        <p className='flex items-center'><Rating style={{ maxWidth: 150 }} value={Math.round(toy?.ratings) || 0} readOnly /><span className='ms-2'> {toy?.ratings}</span> </p>
                                        <div className="card-actions">
                                            <button className="btn btn-error">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='md:flex  md:items-center md:justify-center gap-6'>
                        {category
                            .filter(toy => toy.category === 'Dinosaur').slice(0, 2)
                            .map((toy, index) => (
                                <div className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200" key={index}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl w-96 h-60" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-blue-600">{toy.name}</h2>
                                        <p className='text-green-700 font-normal'>Price: $<span >{toy.price}</span> </p>

                                        <p className='flex items-center'><Rating style={{ maxWidth: 150 }} value={Math.round(toy?.ratings) || 0} readOnly /><span className='ms-2'> {toy?.ratings}</span> </p>
                                        <div className="card-actions">
                                            <button className="btn btn-error">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='md:flex  md:items-center md:justify-center gap-6'>
                        {category
                            .filter(toy => toy.category === 'Cat').slice(0, 2)
                            .map((toy, index) => (
                                <div className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200" key={index}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl w-96 h-60" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-blue-600">{toy.name}</h2>
                                        <p className='text-green-700 font-normal'>Price: $<span >{toy.price}</span> </p>

                                        <p className='flex items-center'><Rating style={{ maxWidth: 150 }} value={Math.round(toy?.ratings) || 0} readOnly /><span className='ms-2'> {toy?.ratings}</span> </p>
                                        <div className="card-actions">
                                            <button className="btn btn-error">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
            </Tabs>





          








        </div>
    );
};

export default ShopByCategory;