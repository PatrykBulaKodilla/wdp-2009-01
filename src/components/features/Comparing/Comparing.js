import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './Comparing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Comparing = ({ comparedProducts, deleteComparing }) => (
  <div className='container'>
    {comparedProducts.length >= 1 && (
      <div className={styles.compare_box}>
        <div className={styles.compare_list}>
          <div className={styles.compare_list_left}>
            <p>Compare</p>
            {comparedProducts.map(product => (
              <div
                key={product}
                className={styles.compare_item}
                onClick={() =>
                  deleteComparing(
                    comparedProducts.findIndex(idProduct => idProduct === product)
                  )
                }
              >
                <img
                  src={require('../../../images/products/' + product + '.jpg')}
                  width='80'
                  height='80'
                  alt={product.category}
                ></img>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={styles.mobile_close}
                ></FontAwesomeIcon>
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
  deleteComparing: PropTypes.func,
};

export default Comparing;
