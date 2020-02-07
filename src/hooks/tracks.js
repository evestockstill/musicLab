import { useState, useEffect } from 'react';
import { getTracks } from '../services/fetchTracks';

export const useTracks = (id) => {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    getTracks(id)
      .then(resObj => {
        setTracks(resObj.recordings);
      });
  });
  return tracks;
};
