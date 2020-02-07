import React, { useState } from 'react';
import styles from './Header.css';
import SearchBar from '../search/Search';
import ArtistList from '../artists/ArtistList';
import { useArtists } from '../../hooks/artists';

const Header = () => {
    const { artists, count, handleQueryChange, handleSubmit } = useArtists();

  return (
    <>
      <h1 className={styles.Header}>Artist Search</h1>
      <SearchBar onSubmit={handleSubmit} onQueryChange={handleQueryChange} />
      <ArtistList artists={artists}/>
    </>
  );
};
export default Header;
