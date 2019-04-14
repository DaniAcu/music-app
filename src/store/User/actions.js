export const setToken = payload => ({
    type: 'SET_TOKEN',
    payload
})

export const saveToken = token => {
    return dispatch => {
        localStorage.setItem('token', token);
        dispatch(setToken(token))
    }
}