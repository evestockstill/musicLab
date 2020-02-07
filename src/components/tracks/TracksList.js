import React from 'react';
import { useTracks } from '../../hooks/tracks';
import { Link } from 'react-router-dom';


const TracksList = ({ match }) => {
  const tracks = useTracks(match.params.albumId);
  console.log(tracks)
  const listOfTracks = tracks.map(track => {
    console.log(match);
    return (
      <li key={track.id}>
        <Link
          to={`/lyrics/${match.params.artistName}/${match.params.id}/${track.title}`}
        >
          {track.title}
        </Link>
      </li>
    );
  });
  return (
    <>
      <h1>Tracks</h1>
      <ul>{listOfTracks}</ul>
    </>
  );
};
TracksList.

export default TracksList;
