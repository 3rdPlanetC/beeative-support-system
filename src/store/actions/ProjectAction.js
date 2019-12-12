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