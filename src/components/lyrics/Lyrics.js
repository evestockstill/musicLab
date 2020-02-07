import React from 'react';
import PropTypes from 'prop-types';
import { useLyrics } from '../../hooks/lyrics';
import { Link } from 'react-router-dom';

const Lyrics = ({ match }) => {
  console.log(match);
    const { lyrics }= useLyrics(match.params.id, match.params.artistName);
  return <h1>hi</h1>;
};

export default Lyrics;
