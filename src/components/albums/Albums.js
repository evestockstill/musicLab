import React from 'react';
import PropTypes from 'prop-types';

const Albums = ({ match }) => {
  return ( 
    <>
      <h1>{match.params.id} </h1>
    </>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Albums;
