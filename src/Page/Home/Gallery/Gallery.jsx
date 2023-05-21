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
import Aos from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {

    Aos.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

    return (

        <>

            <div className='container mx-auto mt-10 mb-10  '>
                <h1 className='text-center md:text-5xl text-xl font-bold text-blue-500'>Animal Toys Collection</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-10 overflow-hidden' data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"  >



                    <div className="card w-96 bg-base-100 shadow-xl border-2 ">
                        <figure><img src={gallary1} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary2} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary3} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary4} alt="Shoes" className='' /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary5} alt="Shoes" className='' /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary6} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary7} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary8} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary9} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary10} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary11} alt="Shoes" /></figure>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2">
                        <figure><img src={gallary12} alt="Shoes" /></figure>

                    </div>


                </div>
            </div>
        </>



    );
};

export default Gallery;