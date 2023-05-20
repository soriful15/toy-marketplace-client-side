import React, { useState } from 'react';
import teddybear from '../../../assets/specialOffer/teddybear.jpeg'
import teddybear2 from '../../../assets/specialOffer/teddybear2.jpeg'
import dog from '../../../assets/specialOffer/dog.jpeg'
import dog2 from '../../../assets/specialOffer/dog2.jpg'
import dinosaur from '../../../assets/specialOffer/Dinosaur.jpeg'
import dinosaur2 from '../../../assets/specialOffer/Dinosaur2.jpeg'
import { toast } from 'react-toastify';
const SpecialOffers = () => {
    const [buy,setBuy]=useState(false)

const handleAddBuy=()=>{
    setBuy(true)
    toast("Add To Special Offer Toy");
}

    return (
        <div>
            <h1 className='mx-auto container text-3xl mt-20 text-center text-teal-400'>  Special Offers</h1>


         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 mx-auto container mt-12'>



         <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={teddybear} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Giant Teddy Bear</h2>
                    <p className='font-normal text-black'>Price:$200</p>
                    <p className='font-normal text-black'>Quantity:6</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={teddybear2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Teddy Bear with Bow</h2>
                    <p className='font-normal text-black'>Price:$300</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>





            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={dinosaur} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Triceratops Dinosaur Toy</h2>
                    <p className='font-normal text-black'>Price:$350</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={dinosaur2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Stegosaurus  Dinosaur Toy</h2>
                    <p className='font-normal text-black'>Price:$250</p>
                    <p className='font-normal text-black'>Quantity:6</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={dog} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Squeaky Dog Toy</h2>
                    <p className='font-normal text-black'>Price:$200</p>
                    <p className='font-normal text-black'>Quantity:8</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>



            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={dog2} alt="Shoes" className='h-64 w-full' /></figure>
                <div className="card-body bg-green-200">
                    <h2 className="card-title">Rope Dog Toy</h2>
                    <p className='font-normal text-black'>Price:$300</p>
                    <p className='font-normal text-black'>Quantity:7</p>
                    <div className="card-actions">
                        <button onClick={handleAddBuy} disabled={buy} className="btn btn-outline btn-secondary w-full">Add to Buy Now</button>
                    </div>
                </div>
            </div>



         </div>

        </div>
    );
};

export default SpecialOffers;