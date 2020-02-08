import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={query}
        onChange={({ target }) => onQueryChange(target.value)}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};
SearchBar.propTypes = {
  query: PropTypes.string,
  onQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;
