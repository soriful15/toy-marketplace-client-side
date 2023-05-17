import React from 'react';

import Footer from '../Page/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Header/Header';


const Main = () => {
    return (
        <div>
        <Header></Header>
        <div className='min-h-[calc(100vh-250px)]'>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;