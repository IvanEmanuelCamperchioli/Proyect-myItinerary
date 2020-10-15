const initialState = {
    token: '',
    urlPick: '',
    firstName: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER':
            console.log('hay token')
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                urlPick: action.payload.urlPick,
                firstName: action.payload.firstName
            }
        case 'UNLOG_USER':
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
} 

export default userReducer