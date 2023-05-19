import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
const SingleToy = () => {
    const singleToy = useLoaderData()
    console.log(singleToy)
    const { name, price, quantity, seller_name, category, details, img, ratings, seller_email } = singleToy
    return (
        <>
            <div className='container mx-auto mt-16 max-w-7xl'>


                <div className="card lg:card-side bg-base-100 lg:max-w-7xl lg:max-h-96 shadow-xl">
                    <figure><img src={img} className='w-full h-full' alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Name:{seller_name}</h2>
                        <p className='text-sm text-amber-800'>Email:{seller_email}</p>
                        <p className='text-xl text-emerald-950'>ToyName:{name}</p>
                        <p className='text-lg text-purple-900 font-semibold'>category:{category}</p>
                        <p className='font-bold text-sky-900'>Price:{price}</p>
                        <p className='font-bold text-indigo-900'>Quantity:{quantity}</p>

                        <p className='font-normal text-lg text-green-800'>Description: {details}</p>
                        <div className='flex  items-center'>
                            <Rating style={{ maxWidth: 150 }} value={Math.round(ratings) || 0} readOnly /><span className='ms-2'> {ratings}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SingleToy;