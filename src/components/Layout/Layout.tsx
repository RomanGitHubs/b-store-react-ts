import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import scrollToTop from '../ScrollToTop/ScrollToTop';

const Layout: React.FC = () => {
  scrollToTop();

  // const location = useLocation();
  // const path = location?.pathname;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
