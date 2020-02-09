import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ handlePageChange }) => {
  return (
    <div className={styles.Buttons}>
      <button
        value={'previous'}
        onClick={({ target }) => handlePageChange(target.value)}
        className={styles.prev}
      >
      </button>
      <button
        value={'next'}
        onClick={({ target }) => handlePageChange(target.value)}
        className={styles.next}
      >
      </button>
    </div>
  );
};

Paging.propTypes = {
  handlePageChange: PropTypes.func.isRequired
};


export default Paging;
