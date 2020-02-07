import { useEffect, useState } from 'react';
import { getLyrics } from '../services/fetchLyrics';

export const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('');
  
  useEffect(() => {
    getLyrics(artist, title).then(resObject => {
      setLyrics(resObject.lyrics);
    });
  }, []);
  return { lyrics };
};
