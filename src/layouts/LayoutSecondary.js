import React from 'react';
import Header from '../components/layout/Header02';
import Footer from '../components/layout/Footer';

const LayoutSecondary = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" className="reveal-from-top"/>
    <main className="site-content">
      {children}
    </main>
    <Footer topDivider/>
    <div className="illustration-section-10"></div>
  </React.Fragment>
);

export default LayoutSecondary;  