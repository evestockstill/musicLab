import React from 'react';
import { useTracks } from '../../hooks/tracks';
import PropTypes from 'prop-types';
import styles from './TracksList.css';
import { Link } from 'react-router-dom';

const TracksList = ({ match }) => {
  const { tracks, loading } = useTracks(match.params.albumId);
  if(loading)
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
      </div>
    );
  const listOfTracks = tracks.map(track => {
    return (

      <Link
        className={styles.LinkTracks}
        key={track.id}
        to={`/lyrics/${match.params.artistName}/${match.params.id}/${track.title}`}
      >
        <li className={styles.tracks_list}>
          <h3>{track.title}</h3>
        </li>
      </Link>
    );
  });
  return (
    <>
      <h1 className={styles.title}>Tracks on { match.params.id}</h1>
      <ul className={styles.TrackNames}>{listOfTracks}</ul>
    </>
  );
};
TracksList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string,
      albumId: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TracksList;
