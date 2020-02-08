import { useEffect, useState } from 'react';
import { getArtists } from '../services/fetchArtists';

export const useArtists = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);



  const handleQueryChange = searchInput => {
    setQuery(searchInput);
  };
  const handleSubmit = () => {
    event.preventDefault();
    setSearchTerm(query);
    return artists;
  };

  const handlePageChange = (value) => {
    
    if(value === 'next'){
      setPage(page + 1);
    }
    if(value === 'previous' && page !== 1){
      setPage(page - 1);
    }
  };


  useEffect(() => {
    if(!query) {
      setLoading(false);
      return;
    }
    setLoading(true);
    getArtists(query, page)
      .then(resObject => {
        setCount(resObject.count);
        setArtists(resObject.artists);
      })
      .finally(() => setLoading(false));
  }, [searchTerm, page]);
  return { loading, artists, count, handleQueryChange, handleSubmit, handlePageChange };
};
