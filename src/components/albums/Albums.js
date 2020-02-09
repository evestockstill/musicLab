import React from 'react';
import PropTypes from 'prop-types';
import { useAlbums } from '../../hooks/albums';
import { Link } from 'react-router-dom';
import styles from './Albums.css';
import record from '../../assets/record2.png';

const Album = ({ match }) => {
  const { albums, count, loading } = useAlbums(match.params.id);
  if(loading)
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
      </div>
    );
  if(!count) return <p className={styles.error}>This artist has no albums.</p>;
  const albumsList = albums.map(album => {
    return (
      <Link
        className={styles.Link}
        key={album.id}
        to={`/tracks/${match.params.artistName}/${album.title}/${album.id}`}
      >
        <article className={styles.album}>
          <div className={styles.img_container}>
            <img
              className={styles.record_image}
              src={
                album['cover-art-archive']['front']
                  ? `http://coverartarchive.org/release/${album.id}/front`
                  : record
              }
              alt='record cover'
            />
          </div>
          <div className={styles.album_info}>
            <h3>{album.title}</h3>
          </div>
        </article>
      </Link>
    );
  });
  return (
    <>
      <h2 className={styles.AlbumTitle}>Albums by {match.params.artistName}</h2>
      <ul className={styles.ul}>{albumsList}</ul>
    </>
  );
};

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Album;
