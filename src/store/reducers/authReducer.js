const initialState = {
    currentLogin: false,
}

const authReducer = (state = initialState, {type, value}) => {
    switch(type) {
        case 'LOGIN':
            return state = {
                ...state, 
                currentLogin: value,
            }
        case 'LOGOUT':
            return state = {
                ...state, 
                currentLogin: value,
            }
        case 'CURRENT_LOGIN':
            return state = {
                ...state, 
                currentLogin: value,
            }
        default:
            return state
    }
}

export default authReducer