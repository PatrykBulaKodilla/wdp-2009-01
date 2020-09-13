import React from 'react';
import PropTypes from 'prop-types';
import HotDealsContainer from '../../features/HotDeals/HotDealsContainer';
import styles from './Promo.module.scss';
import ShopNowAdContainer from '../../features/ShopNowAd/ShopNowAdContainer';

const Promo = ({ products }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col-4 ' + styles.fadeIn}>
          <HotDealsContainer {...products} />
        </div>
        <div className={'col-8 ' + styles.fadeIn}>
          <ShopNowAdContainer {...products} />
        </div>
      </div>
    </div>
  </div>
);

Promo.propTypes = {
  products: PropTypes.object,
};

export default Promo;
