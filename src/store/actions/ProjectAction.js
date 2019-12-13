export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('customer_project').add({
            ...project
        }).then(() => {
            // notification
        }).catch(err => {
            // notification
        })
    }
}

export const deleteProject = (project) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('customer_project').doc(project.id).delete().then(() => {
            // notification
        }).catch(err => {
            // notification
        })
    }
}

export const updateProject = (project) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('customer_project').doc(project.id).update({
            ...project
        }).then(() => {
            // notification
        }).catch(err => {
            // notification
        })
    }
}

export const createCustomerId = (projectName, index, callback) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('admin_account').doc('customerId').update({
            [index]: projectName
        }).then(() => {
            callback()
            // notification
        }).catch(err => {
            // notification
        })
    }
}

export const createSystemType = (SystemName, index, callback) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('admin_account').doc('systemType').update({
            [index]: SystemName
        }).then(() => {
            callback()
            // notification
        }).catch(err => {
            // notification
        })
    }
}