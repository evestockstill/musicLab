import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paging from '../pagination/Paging';


const ArtistList = ({ artists, loading, handlePageChange }) => {

  const artistList = artists.map(artist => {
    return (
      <Link key={artist.id} to={`/artist/${artist.name}/${artist.id}`}>
        <li>{artist.name}</li>
      </Link>
    );
  });
  if(loading) return <h1>Loading</h1>; 
  return (
    <>
      <Paging handlePageChange={handlePageChange}/>
      <ul>{artistList}</ul>
    </>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ArtistList;
