export const createUserRole = (role, uid) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('users').doc(uid).update({
            role: role
        }).then(() => {
            // notification
        }).catch(err => {
            // notification
        })
    }
}