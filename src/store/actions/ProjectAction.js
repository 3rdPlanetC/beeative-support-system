export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('customer_project').add({
            project_id: project.project_id,
            project_name: project.project_name,
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}

// export const deleteProject = (project) => {
//     return () => {

//     }
// }

// export const updateProject = (project) => {
//     return () => {

//     }
// }

// export const readProject = () => {
//     return () => {

//     }
// }