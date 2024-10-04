import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;