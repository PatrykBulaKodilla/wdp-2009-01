import React from 'react';
import PropTypes from 'prop-types';

import styles from './ShopNowAd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const ShopNowAd = ({
  id,
  name,
  oldPrice,
  price,
  promo,
  stars,
  favorite,
  compare,
  changeFavorite,
  index,
  starsRating,
}) => (
  <div className={styles.root}>
    {console.log(id)}
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${require('../../../images/products/' + id + '.jpg')})`,
      }}
    >
      <div className={styles.banner}>
        <h2>
          <span>INDOOR</span> FURNITURE
        </h2>
        <h3>SAVE UP TO 50% OF ALL FURNITURE</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant='bigWhite'>Shop Now</Button>
      </div>
    </div>

    <div className={styles.wrapper}>
      <a href='/' className={styles.bottomBar}>
        <h4>
          <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        </h4>
      </a>
      <a href='/' className={styles.bottomBar}>
        <h4>
          <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
        </h4>
      </a>
    </div>
  </div>
);

ShopNowAd.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  changeFavorite: PropTypes.func,
  index: PropTypes.number,
  starsRating: PropTypes.number,
};

export default ShopNowAd;
