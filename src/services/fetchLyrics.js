export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
    headers: {
      origin: null
    }
  }).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
