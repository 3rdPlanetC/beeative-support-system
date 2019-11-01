const projectReducer = (state = null, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECR_ERROR':
            console.log('created project error', action.err)
            return state
        default:
            return state
    }
}