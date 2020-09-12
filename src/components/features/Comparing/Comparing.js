import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './Comparing.module.scss';

const Comparing = ({ comparedProducts }) => (
  <div className='container'>
    {comparedProducts.length >= 1 && (
      <div className={styles.compare_box}>
        <div className={styles.compare_list}>
          <div className={styles.compare_list_left}>
            <p>Compare</p>
            {comparedProducts.map(product => (
              <div className={styles.compare_item} key={product.id}>
                <img
                  src={require('../../../images/products/' + product.id + '.jpg')}
                  width='80'
                  height='80'
                  alt={product.category}
                ></img>
              </div>
            ))}
            <div className={styles.compare_list_right}>
              <Button variant='small'>Compare</Button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

Comparing.propTypes = {
  comparedProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Comparing;
