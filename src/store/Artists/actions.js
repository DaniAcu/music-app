export const setTopArtists = payload => ({
  type: 'SET_ARTISTS_TOP',
  payload
});

export const fetchTopArtists = () => {
  return (dispatch, getState, axios) => {
    axios
      .get('https://api.spotify.com/v1/me/top/artists', {
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
            description: `${item.followers.total} followers`
          }))
      )
      .then(setTopArtists)
      .then(dispatch);
  };
};
