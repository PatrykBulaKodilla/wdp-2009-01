import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

class MenuBar extends React.Component {
  state = {
    toggleActive: false,
  };

  toggleClass() {
    const currentState = this.state.toggleActive;
    this.setState({ toggleActive: !currentState });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col'>
              <ProductSearch />
            </div>
            <div
              className={`'col-auto' ${styles.menu} ${
                this.state.toggleActive ? styles.menu_visible : null
              }`}
            >
              <ul>
                <li>
                  <a href='/' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/shop/furniture'>Furniture</a>
                </li>
                <li>
                  <a href='/shop/chair'>Chair</a>
                </li>
                <li>
                  <a href='/shop/table'>Table</a>
                </li>
                <li>
                  <a href='/shop/sofa'>Sofa</a>
                </li>
                <li>
                  <a href='/shop/bedroom'>Bedroom</a>
                </li>
                <li>
                  <a href='/blog'>Blog</a>
                </li>
              </ul>
            </div>
            <button
              className={`${styles.hamburger} ${
                this.state.toggleActive ? styles.hamburger_active : null
              }`}
              onClick={() => this.toggleClass()}
            >
              <span className={styles.hamburger_box}>
                <span className={styles.hamburger_inner} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
