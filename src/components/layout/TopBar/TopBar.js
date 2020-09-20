import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='/'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <Link to='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <p>Login</p>
              </Link>
            </li>
            <li>
              <a href='/'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <p> Register </p>
              </a>
            </li>
            <li>
              <a href='/'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
