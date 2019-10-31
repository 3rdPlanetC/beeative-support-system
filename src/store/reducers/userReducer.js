const userReducer = (state = null, {type, value}) => {

    switch(type) {
        case 'USER_PROFILE':
            
            if (value === null) {
                return {
                    displayName: null,
                    email: null,
                    photoURL: null,
                    uid: null
                }
            } else {
                return {
                    ...value
                }
            }
        default:
            return state
    }
}

export default userReducer