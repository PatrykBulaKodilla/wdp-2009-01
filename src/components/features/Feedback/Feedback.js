import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { feedback } = this.props;
    const pagesCount = feedback.length;
    const { activePage } = this.state;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/'
            onClick={event => this.handlePageChange(i, event)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
              {feedback.slice(activePage, activePage + 1).map((feedback, id) => (
                <div key={id}>
                  <div className={styles.feedback}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                    <p className={styles.feedbackText}>{feedback.message}</p>
                    <div className={styles.customer}>
                      <img
                        className={styles.image}
                        src={feedback.photo}
                        alt='customer avatar'
                      />
                      <div className={styles.customerData}>
                        <p>{feedback.customer.name}</p>
                        <p>{feedback.customer.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
