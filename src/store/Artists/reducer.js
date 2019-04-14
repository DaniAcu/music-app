const initialState = {
    list: []
};

export function artistsReducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'SET_ARTISTS_TOP':
            return { ...state, list: payload }

        default:
            return state;
    }
}