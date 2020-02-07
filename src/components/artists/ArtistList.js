import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ArtistList = ({ artists, loading }) => {
  const artistList = artists.map(artist => {
    return (
      <Link key={artist.id} to={`/albums/${artist.id}`}>
        <li>{artist.name}</li>
      </Link>
    );
  });
  if(loading) return <h1>Loading</h1>; 
  return (
    <ul>{artistList}</ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ArtistList;
