export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('customer_project').add({
            ...project
        }).then(() => {
            console.log("add finished")
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteProject = (project) => {
    return () => {

    }
}

// export const updateProject = (project) => {
//     return () => {

//     }
// }

// export const readProject = () => {
//     return () => {

//     }
// }