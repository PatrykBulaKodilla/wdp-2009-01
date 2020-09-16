import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import ReactHtmlParser from 'react-html-parser';

const Promotion = ({
  promotionLeftBox,
  promotionRightBoxBottom,
  promotionRightBoxTop,
}) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.leftBox}>
            <div className={styles.leftWrapper}>
              {ReactHtmlParser(promotionLeftBox)}
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.rightTopBox}>
                  <div className={styles.rightTopWrapper}>
                    {ReactHtmlParser(promotionRightBoxTop)}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className={styles.rightBottomBox}>
                  <div className={styles.rightBottomWrapper}>
                    {ReactHtmlParser(promotionRightBoxBottom)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  promotionLeftBox: PropTypes.string,
  promotionRightBoxTop: PropTypes.string,
  promotionRightBoxBottom: PropTypes.string,
};

export default Promotion;
