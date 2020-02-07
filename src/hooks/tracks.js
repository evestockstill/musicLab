import { useState, useEffect } from 'react';
import { getTracks } from '../services/fetchTracks';

export const useTracks = (id) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    getTracks(id)
      .then(resObj => {
        setTracks(resObj.recordings);
      })
      .finally(() => setLoading(false));
  }, []);
  return { tracks, loading };
};
