import React from 'react';
// import PropTypes from 'prop-types';
import HotDeals from '../../features/HotDeals/HotDeals';
import styles from './Promo.module.scss';

const Promo = products => (
  <div className={styles.root}>
    {console.log(products)}
    <HotDeals product={products.products[1]} />
  </div>
);

Promo.propTypes = {};

export default Promo;
