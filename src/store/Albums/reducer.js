const initialState = {
  list: [],
  artist: null
};

export function albumsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_ALBUMS':
      return { ...state, list: payload };

    case 'SET_ARTIST':
      return { ...state, artist: payload };

    default:
      return state;
  }
}
