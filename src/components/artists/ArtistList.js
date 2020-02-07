import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map(artist => {
    return (
    //   <Link to={`/albums/${artist.id}`}>
      <li key={artist.id}>{artist.name}</li>
    //   </Link>
    );
  });
  return (
    <ul>{artistList}</ul>
  );
};

export default ArtistList;
