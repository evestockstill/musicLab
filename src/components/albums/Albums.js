import React from 'react';
import PropTypes from 'prop-types';
import { useAlbums } from '../../hooks/albums';
import { Link } from 'react-router-dom';

const Albums = ({ match }) => {
  const { albums, count } = useAlbums(match.params.id);
  
  if(!count) return <p>This artist has no albums.</p>;
  const albumsList = albums.map(album => {
    return (
      <Link
        key={album.id}
        to={`/tracks/${match.params.artistName}/${album.title}/${album.id}`}
      >
        <li>{album.title}</li>
      </Link>
    );
  });

  return (

    <ul>{albumsList} </ul>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Albums;
