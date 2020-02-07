import { useEffect, useState } from 'react';
import { getArtists } from '../services/fetchArtists';

export const useArtists = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const handleQueryChange = searchInput => {
    setQuery(searchInput);
  };
  const handleSubmit = () => {
    event.preventDefault();
    setSearchTerm(query);
    return artists;
  };

  useEffect(() => {
    if(!query) {
      setLoading(false);
      return;
    }
    setLoading(true);
    getArtists(query)
      .then(resObject => {
        setCount(resObject.count);
        setArtists(resObject.artists);
      })
      .finally(() => setLoading(false));
  }, [searchTerm]);
  return { loading, artists, count, handleQueryChange, handleSubmit };
};
