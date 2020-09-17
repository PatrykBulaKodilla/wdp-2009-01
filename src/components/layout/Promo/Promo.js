import React from 'react';
import PropTypes from 'prop-types';
import HotDealsContainer from '../../features/HotDeals/HotDealsContainer';
import styles from './Promo.module.scss';
import ShopNowAdContainer from '../../features/ShopNowAd/ShopNowAdContainer';
import { observable } from 'rxjs/ajax';

// let index =  0; Alternatywa rozwiązania poprzez state i observable
const Promo = ({ products }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        {/* { window.setInterval(function(){
          console.log(index);
          if ( index < products.length -1){
            index++;
            
          } else {
            index = 0; 
          }
          
          
        }, 5000)} */}

        {products.map(product => (
          <div className={'col-4 ' + styles.fadeIn} key={product.id}>
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
