import { useEffect, useState } from 'react';
import { getArtists } from '../services/fetchArtists';

export const useArtists = () => {
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
    // const artistsNameId = artists.map(artist => ({
    //   id: artist.id,
    //   name: artist.name
    // }));
    // console.log(artistsNameId);
    return artists;
  };

  useEffect(() => {
    getArtists(query).then(resObject => {
      setCount(resObject.count);
      setArtists(resObject.artists);
    });
  }, [searchTerm]);
  return { artists, count, handleQueryChange, handleSubmit };
};
