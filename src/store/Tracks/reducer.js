const initialState = {
  list: [],
  album: null
};

export function tracksReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_TRACKS':
      return { ...state, list: payload };

    case 'SET_ALBUM':
      return { ...state, album: payload };

    case 'PLAY_TRACK':
      return {
        ...state,
        list: state.list.map(item => {
          if (item.isPlaying) {
            item.isPlaying = false;
          }
          if (payload.id === item.id) {
            item.isPlaying = true;
          }
          return item;
        })
      };

    case 'PAUSE_TRACK':
      return {
        ...state,
        list: state.list.map(item => {
          item.isPlaying = false;
          return item;
        })
      };

    default:
      return state;
  }
}
