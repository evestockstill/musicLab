import React from 'react';
import PropTypes from 'prop-types';
import { useAlbums } from '../../hooks/albums';
import { Link } from 'react-router-dom';
import record from '../../assets/record.jpg';

const Albums = ({ match }) => {
  const { albums, count, loading } = useAlbums(match.params.id);
  if(loading) return <p>Loading...</p>;
  if(!count) return <p>This artist has no albums.</p>;
  const albumsList = albums.map(album => {
    return (
      <Link key={album.id} to={`/tracks/${match.params.artistName}/${album.title}/${album.id}`}>
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
      id: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Albums;
