import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromoContainer from '../../layout/Promo/PromoContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromoContainer />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
