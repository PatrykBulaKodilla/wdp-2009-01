import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import RatingStarContainer from '../../features/RatingStar/RatingStarContainer';

const ProductBox = ({
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
  addComparing,
  getAll,
}) => (
  <div className={styles.root}>
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url(${require('../../../images/products/' + id + '.jpg')})`,
      }}
    >
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button href={'/product/' + id} variant='small'>
          Quick View
        </Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <RatingStarContainer
        stars={stars}
        index={index}
        starsRating={starsRating}
      ></RatingStarContainer>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          compare={favorite}
          variant='outline'
          onClick={event => {
            event.preventDefault();
            changeFavorite(!favorite, index);
          }}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          compare={compare}
          variant='outline'
          onClick={event => {
            return getAll.length === 4
              ? event.preventDefault()
              : (event.preventDefault(), addComparing(id));
          }}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>

      <div className={styles.price}>
        {oldPrice && (
          <Button noHover variant='oldPrice'>
            $ {oldPrice}
          </Button>
        )}
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
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
  addComparing: PropTypes.func,
  getAll: PropTypes.array,
};

export default ProductBox;
