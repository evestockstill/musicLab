import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ArtistList.css';
import Paging from '../pagination/Paging';

const ArtistList = ({ artists, loading, handlePageChange }) => {
  const artistList = artists.map(artist => {
    return (
      <Link
        className={styles.LinkArtist}
        key={artist.id}
        to={`/artist/${artist.name}/${artist.id}`}
      >
        <li className={styles.artist_list}>
          <h3>{artist.name}</h3>
        </li>
      </Link>
    );
  });
  if(loading)
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
      </div>
    );
  return (
    <>
      <Paging handlePageChange={handlePageChange} />
      <ul className={styles.names}>{artistList}</ul>
    </>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ArtistList;
