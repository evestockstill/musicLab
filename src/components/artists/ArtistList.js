import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map(artist => {
    return (
      <Link key={artist.id} to={`/albums/${artist.name}/${artist.id}`}>
        <li>{artist.name}</li>
      </Link>
    );
  });
  return (
    <ul>{artistList}</ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;
