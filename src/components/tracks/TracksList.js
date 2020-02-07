import React from 'react';
import { useTracks } from '../../hooks/tracks';
const TracksList = ({ match }) => {

  const { tracks, loading } = useTracks(match.params.albumId);
  if(loading) return <p>Loading...</p>;
  const listOfTracks = tracks.map(track => {
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
