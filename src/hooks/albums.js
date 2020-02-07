import { useEffect, useState } from 'react';
import { getAlbums } from '../services/fetchAlbums';

export const useAlbums = (id) => {
  const [albums, setAlbums] = useState([]);
  const [count, setCount] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAlbums(id)
      .then(resObject => {
        setCount(resObject['release-count']);
        setAlbums(resObject.releases);
      })
      .finally(() => setLoading(false));
  }, []);
  return { albums, count, loading };
};
