import React from 'react';
import NavBar from '../Page/NavBar/NavBar';
import Footer from '../Page/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;