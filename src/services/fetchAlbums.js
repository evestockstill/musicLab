export const getAlbums = (id) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    console.log('api res', res);
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
