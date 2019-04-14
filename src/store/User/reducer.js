const initialState = {
    token: '' || localStorage.getItem('token')
};

export function userReducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'SET_TOKEN':
            return { ...state, token: payload }

        default:
            return state;
    }
}