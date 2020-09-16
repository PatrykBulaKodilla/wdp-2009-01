import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ComparingContainer from '../../features/Comparing/ComparingContainer';
import PromoContainer from '../../layout/Promo/PromoContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotion from '../../features/Promotion/PromotionContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromoContainer />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <ComparingContainer />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
