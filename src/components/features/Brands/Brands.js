import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class Brands extends React.Component {
  static propTypes = {
    brands: PropTypes.array,
    currentRwdMode: PropTypes.string,
  };

  render() {
    const { brands, currentRwdMode } = this.props;

    let countPerPage = 6;

    if (currentRwdMode === 'tablet') {
      countPerPage = 3;
    } else if (currentRwdMode === 'mobile') {
      countPerPage = 2;
    } else {
      countPerPage = 6;
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.slider}>
            <Button className={styles.preview}></Button>
            <div className={styles.thumbnails}>
              {brands.slice(0, countPerPage).map(brand => (
                <div key={brand.id} className={styles.thumbnail}>
                  <img src={brand.photo} alt={brand.name} />
                </div>
              ))}
            </div>
            <Button className={styles.next}></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
