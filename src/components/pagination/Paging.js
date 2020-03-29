import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ handlePageChange }) => {
  return (
    <div className={styles.Buttons}>
      <span className={styles.previousText}>Previous</span><button
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
      <span className={styles.nextText}>Next</span>
    </div>
  );
};

Paging.propTypes = {
  handlePageChange: PropTypes.func.isRequired
};


export default Paging;
