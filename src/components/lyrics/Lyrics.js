import React from 'react';
import PropTypes from 'prop-types';
import { useLyrics } from '../../hooks/lyrics';

const Lyrics = ({ match }) => {
  console.log('lyrics', lyrics);
  const { lyrics } = useLyrics(
    match.params.artistName,
    match.params.songId
  );
  return <p>{lyrics}</p>;
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
