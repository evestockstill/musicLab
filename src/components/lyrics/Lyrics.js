import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';
import { useLyrics } from '../../hooks/lyrics';

const Lyrics = ({ match }) => {
  const { lyrics } = useLyrics(match.params.artistName, match.params.songId);
  return (
    <>
      <h2 className={styles.SongTitle}>Lyrics for {match.params.songId}</h2>
      <div className={styles.lyricsBox}>
        <p className={styles.lyrics}>{lyrics}</p>
      </div>
    </>
  );
};

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      songId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Lyrics;
