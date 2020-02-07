import React from 'react';
import { useTracks } from '../../hooks/tracks';
const TracksList = () => {

  const tracks = useTracks({match.params.});
  return (
    <h1>Tracks</h1>
  );
};

export default TracksList;
