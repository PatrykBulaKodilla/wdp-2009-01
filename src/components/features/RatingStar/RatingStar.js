import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingStar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const RatingStar = ({ stars, starsRating, changeRating, index }) => (
  <div className={styles.stars}>
    {[5, 4, 3, 2, 1].map(i => (
      <a key={i} href='/' className={'b' + i && 'transition-time'}>
        {starsRating ? (
          i <= starsRating ? (
            <FontAwesomeIcon
              icon={faStar}
              className={styles.active}
              onClick={event => {
                event.preventDefault();
                changeRating(i, index);
              }}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={farStar}
              onClick={event => {
                event.preventDefault();
                changeRating(i, index);
              }}
            >
              {i} stars
            </FontAwesomeIcon>
          )
        ) : i <= stars ? (
          <FontAwesomeIcon
            icon={faStar}
            onClick={event => {
              event.preventDefault();
              changeRating(i, index);
            }}
          >
            {i} stars
          </FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={farStar}
            onClick={event => {
              event.preventDefault();
              changeRating(i, index);
            }}
          >
            {i} stars
          </FontAwesomeIcon>
        )}
      </a>
    ))}
  </div>
);

RatingStar.propTypes = {
  stars: PropTypes.number,
  starsRating: PropTypes.number,
  changeRating: PropTypes.func,
  index: PropTypes.number,
};

export default RatingStar;
