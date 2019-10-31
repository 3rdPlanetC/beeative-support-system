const titleReducer = (state = "Home", {type, value}) => {
    switch(type) {
        case 'TITLE_NAME':
            return value
        default:
            return state
    }
}

export default titleReducer