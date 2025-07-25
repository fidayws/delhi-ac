import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Main content area with proper spacing for fixed header */}
      <main className="flex-1">
        {/* No top padding for home page, but add it for other pages */}
        <div className={isHomePage ? '' : 'pt-[120px]'}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout; 