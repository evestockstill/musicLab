import React, { useState } from 'react';
import styles from './Header.css';
import SearchBar from '../search/Search';
import ArtistList from '../artists/ArtistList';
import { useArtists } from '../../hooks/artists';

const Header = () => {
  const { artists, loading, handleQueryChange, handleSubmit, handlePageChange } = useArtists();

  return (
    <>
      <h1 className={styles.Header}>Artist Search</h1>
      <SearchBar onSubmit={handleSubmit} onQueryChange={handleQueryChange} />
      <ArtistList artists={artists} loading={loading} handlePageChange={handlePageChange} />
    </>
  );
};
export default Header;
