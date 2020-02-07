export const getArtists = query => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    console.log('api res', res);
    if (res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
