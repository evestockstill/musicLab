import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Paging = ({ handlePageChange }) => {
  return (
    <div> 
      <button value={'previous'} onClick={({ target }) => handlePageChange(target.value)}>Previous</button>
      <button value={'next'} onClick={({ target }) => handlePageChange(target.value)}>Next</button>
    </div>
  );
};

Paging.propTypes = {
  handlePageChange: PropTypes.func.isRequired
};


export default Paging;
