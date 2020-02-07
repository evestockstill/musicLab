import React from 'react';
import PropTypes from 'prop-types';
import { useAlbums } from '../../hooks/albums';
import { Link } from 'react-router-dom';
import record from '../../assets/record.jpg';

const Albums = ({ match }) => {
  const { albums, count } = useAlbums(match.params.id);
  if(!count) return <p>This artist has no albums.</p>;
  const albumsList = albums.map(album => {
    return (
      <Link key={album.id} to={`/albums/${match.params.id}/${album.id}`}>
        <li>
          <p>{album.title}</p>
          <img src={album['cover-art-archive']['front'] ? `http://coverartarchive.org/release/${album.id}/front` : record}/>
        </li>
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
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Albums;
