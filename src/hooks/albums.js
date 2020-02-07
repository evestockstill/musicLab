import { useEffect, useState } from 'react';
import { getAlbums } from '../services/fetchAlbums';

export const useAlbums = (id) => {
  const [albums, setAlbums] = useState([]);
  const [count, setCount] = useState(-1);

  useEffect(() => {
    getAlbums(id).then(resObject => {
      console.log(resObject['release-count']);
      setCount(resObject['release-count']);
      setAlbums(resObject.releases);
    });
  }, []);
  return { albums, count };
};
