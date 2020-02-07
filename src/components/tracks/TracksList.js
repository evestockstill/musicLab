import React from 'react';
import { useTracks } from '../../hooks/tracks';
const TracksList = ({ match }) => {

  const tracks = useTracks(match.params.albumId);
  const listOfTracks = tracks.map(track => {
    console.log(track);
    return (
      <li key={track.id}>{track.title}</li>
    );
  });
  return (
    <>
      <h1>Tracks</h1>
      <ul>
        {listOfTracks}
      </ul>
    </>
  );
};

export default TracksList;
