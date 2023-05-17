import React from 'react';
import gallary1 from '../../../assets/toy gallery/gallery-1.jpg'
import gallary2 from '../../../assets/toy gallery/gallery-2.jpg'
import gallary3 from '../../../assets/toy gallery/gallery-3.jpg'
import gallary4 from '../../../assets/toy gallery/gallery-4.jpg'
import gallary5 from '../../../assets/toy gallery/gallery-5.jpg'
import gallary6 from '../../../assets/toy gallery/gallery-6.jpg'
import gallary7 from '../../../assets/toy gallery/gallery-7.jpg'
import gallary8 from '../../../assets/toy gallery/gallery-8.jpg'
import gallary9 from '../../../assets/toy gallery/gallery-9.jpg'
import gallary10 from '../../../assets/toy gallery/gallery-10.jpg'
import gallary11 from '../../../assets/toy gallery/gallery-11.jpg'
import gallary12 from '../../../assets/toy gallery/gallery-12.jpg'
const Gallery = () => {
    return (
        <div className='container mx-auto mt-10 mb-10'>
            <h1 className='text-center text-5xl font-bold text-blue-500'>Animal Toys Collection</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-10 '>



                <div className="card w-96 bg-base-100 shadow-xl border-2 ">
                    <figure><img src={gallary1} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary2} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary3} alt="Shoes"   /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary4} alt="Shoes" className=''  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary5}  alt="Shoes" className=''  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary6} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary7} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary8} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary9} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary10} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary11} alt="Shoes"  /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2">
                    <figure><img src={gallary12} alt="Shoes"  /></figure>

                </div>


            </div>
        </div>
    );
};

export default Gallery;