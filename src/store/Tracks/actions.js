export const setAlbums = payload => ({
  type: 'SET_ALBUM',
  payload
});

export const setTracks = payload => ({
  type: 'SET_TRACKS',
  payload
});

export const playTrack = payload => ({
  type: 'PLAY_TRACK',
  payload
});

export const pauseTrack = payload => ({
  type: 'PAUSE_TRACK',
  payload
});

export const fetchTracksByAlbum = (id, redirect) => {
  return (dispatch, getState, axios) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${id}/tracks?limit=20`, {
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
            preview: item.preview_url,
            isPlaying: false
          }))
      )
      .then(setTracks)
      .then(dispatch)
      .then(redirect);
  };
};
