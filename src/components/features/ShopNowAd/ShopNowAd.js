import React from 'react';
import PropTypes from 'prop-types';

import styles from './ShopNowAd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import RatingStarContainer from '../../features/RatingStar/RatingStarContainer';

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
        <h2>INDOOR FURNITURE</h2>
        <h3>SAVE UP TO 50% OF ALL FURNITURE</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant='small'>Shop Now</Button>
      </div>
    </div>
    <div className={styles.topBar}>
      <h4>HOT DEALS</h4>
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
