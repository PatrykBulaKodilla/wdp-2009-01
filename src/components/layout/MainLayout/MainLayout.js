import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, setResponsiveMode, currentRwdMode }) => {
  const checkRwdMode = windowInnerWidth => {
    if (windowInnerWidth <= 576) {
      //console.log('mobile');
      setResponsiveMode('mobile');
    } else if (windowInnerWidth > 576 && windowInnerWidth <= 768) {
      //console.log('tablet');
      setResponsiveMode('tablet');
    } else {
      //console.log('desktop');
      setResponsiveMode('desktop');
      //console.log('current mode is: ', currentRwdMode);
    }
  };

  checkRwdMode(window.innerWidth);

  window.addEventListener('resize', () => {
    checkRwdMode(window.innerWidth);
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  setResponsiveMode: PropTypes.func,
  currentRwdMode: PropTypes.string,
};

export default MainLayout;
