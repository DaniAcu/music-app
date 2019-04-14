export const setAlbums = payload => ({
  type: 'SET_ALBUMS',
  payload
});

export const setArtist = payload => ({
  type: 'SET_ARTIST',
  payload
});

export const fetchAlbumsByArtist = (id, redirect) => {
  return (dispatch, getState, axios) => {
    axios
      .get(`https://api.spotify.com/v1/artists/${id}/albums`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(
        response =>
          response.data &&
          response.data.items.map(item => ({
            id: item.id,
            name: item.name,
            image: item.images[0].url,
            description: `${item.total_tracks} tracks`
          }))
      )
      .then(setAlbums)
      .then(dispatch)
      .then(redirect);
  };
};
