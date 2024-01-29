import React, { PropsWithChildren, useEffect } from 'react';
import { Header } from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="grid-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
