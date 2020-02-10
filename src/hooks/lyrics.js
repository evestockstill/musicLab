import { useEffect, useState } from 'react';
import { getLyrics } from '../services/fetchLyrics';

export const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('');
  const [count, setCount] = useState(-1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    getLyrics(artist, title).then(resObject => {
      setCount(resObject.lyrics);
      setLyrics(resObject.lyrics);
    })
      .finally(() =>setLoading(false));
  }, []);
  return { lyrics, count, loading };
};
