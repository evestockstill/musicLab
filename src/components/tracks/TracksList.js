import React from 'react';
import { useTracks } from '../../hooks/tracks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TracksList = ({ match }) => {
  const { tracks, loading } = useTracks(match.params.albumId);
  if(loading) return <p>Loading...</p>;
  const listOfTracks = tracks.map(track => {
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
TracksList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TracksList;
