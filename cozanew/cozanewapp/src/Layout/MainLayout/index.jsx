import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import './style.scss'

function MainLayout() {
  return (
    <div className='containerMain'>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  );
}

export default MainLayout;
