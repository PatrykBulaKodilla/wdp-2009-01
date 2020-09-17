import React from 'react';
import PropTypes from 'prop-types';
import HotDealsContainer from '../../features/HotDeals/HotDealsContainer';
import styles from './Promo.module.scss';
import ShopNowAdContainer from '../../features/ShopNowAd/ShopNowAdContainer';

const Promo = ({ products }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        {/* {tns({
          container: '.my-slider',
          items: 3,
          slideBy: 'page',
          autoplay: true,
        })} */}
        {/* <div className=' my-slider'>

          <div>
            <div className={'col-4 ' + styles.fadeIn + ' slide-item'} >1</div>
          </div>
        
          <div>
            <div className={'col-4 ' + styles.fadeIn + ' slide-item'} >2</div>
          </div>
        
          <div>
            <div className={'col-4 ' + styles.fadeIn + ' slide-item'} >3</div>
          </div>
        
        </div> */}
        {console.log(products)}
        {products.map(product => (
          <div className={'col-4 ' + styles.fadeIn + 'slide-item'} key={product.id}>
            <HotDealsContainer {...product} />
          </div>
        ))}

        <div className={'col-8 ' + styles.fadeIn}>
          <ShopNowAdContainer {...products} />
        </div>
      </div>
    </div>
  </div>
);

Promo.propTypes = {
  products: PropTypes.array,
};

export default Promo;
