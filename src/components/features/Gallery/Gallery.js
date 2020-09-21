import React from 'react';
import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import 'rc-tooltip/assets/bootstrap_white.css';
import Tooltip from 'rc-tooltip';

class Gallery extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>

              {/*Gallery tabs*/}
              <div className={styles.menu}>
                <ul>
                  <li>
                    <span className={styles.active}>Featured</span>
                  </li>
                  <li>
                    <span>Top seller</span>
                  </li>
                  <li>
                    <span>Sale off</span>
                  </li>
                  <li>
                    <span>Top rated</span>
                  </li>
                </ul>
              </div>

              {/*Left side of the gallery*/}
              <div className={styles.product}>
                <img
                  src={require('../../../images/products/' + products[3].id + '.jpg')}
                  alt='product-1'
                />

                <div className={styles.buttons}>
                  <Tooltip
                    placement='right'
                    overlay='Add to favorite'
                    arrowContent={<div className='rc-tooltip-arrow-inner' />}
                  >
                    <Button variant='galleryBtn'>
                      <FontAwesomeIcon icon={faHeart}>Add to favorites</FontAwesomeIcon>
                    </Button>
                  </Tooltip>
                  <Tooltip
                    placement='right'
                    overlay='Add to compare'
                    arrowContent={<div className='rc-tooltip-arrow-inner' />}
                  >
                    <Button variant='galleryBtn'>
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                  </Tooltip>
                  <Tooltip
                    placement='right'
                    overlay='View details'
                    arrowContent={<div className='rc-tooltip-arrow-inner' />}
                  >
                    <Button variant='galleryBtn'>
                      <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                    </Button>
                  </Tooltip>
                  <Tooltip
                    placement='right'
                    overlay='Add to basket'
                    arrowContent={<div className='rc-tooltip-arrow-inner' />}
                  >
                    <Button variant='galleryBtn'>
                      <FontAwesomeIcon icon={faShoppingBasket}>
                        Add to basket
                      </FontAwesomeIcon>
                    </Button>
                  </Tooltip>
                </div>

                {/*Rating*/}
                <div className={styles.content}>
                  <div className={styles.triangleTopLeft} />
                  <h5>{products[0].name}</h5>
                  <div className={styles.stars}>
                    <span>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className={styles.triangleBottomRight} />
                  <div className={styles.price}>
                    <h3>${products[0].price}</h3>
                    <h3>
                      <s>${products[0].oldPrice}</s>
                    </h3>
                  </div>
                </div>
              </div>

              {/*Slider*/}
              <div className={styles.slider}>
                <div className={styles.preview}>
                  <p>{'<'}</p>
                </div>
                <div className={styles.thumbnails}>
                  {products.slice(0, 6).map((product, index) => (
                    <div key={product.id}>
                      <img
                        src={require('../../../images/products/' + product.id + '.jpg')}
                        alt=''
                        className={
                          index === 0
                            ? styles.thumbnail + ' ' + styles.active
                            : styles.thumbnail
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.next}>
                  <p>{'>'}</p>
                </div>
              </div>
            </div>

            {/*Right side of the gallery*/}
            <div className={'col-6 ' + styles.picture}>
              <img
                src={require('../../../images/products/' + products[2].id + '.jpg')}
                alt='product-2'
              />
              <div className={styles.details}>
                <h3>
                  from <span>$ {products[2].price}</span>
                </h3>
                <h1>{products[2].name}</h1>
                <Button variant='greenBtn'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      oldPrice: PropTypes.number,
    })
  ),
};

export default Gallery;
