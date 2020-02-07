export const getTracks = id => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`, 
    {
      headers : {
        origin: null
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw `Response: ${res.status}`;
    });   
}; 
