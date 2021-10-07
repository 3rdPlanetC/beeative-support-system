export const GoogleLogin = () => {
    return (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.login({
            provider: 'google',
            type: 'popup'
        }).then(res => {
            // if (res.additionalUserInfo.profile.hd === "beeative.com") {
            //     // console.log(res)
            // } else {
            //     firebase.logout().then(() => {
            //         alert("Error Message : Please Signin by youremail@beeative.com")
            //     })
            //     window.location.reload()
            // }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const LogoutUser = () => {
    return (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase()
        const uid = firebase.auth().currentUser.uid
        const userRef = firebase.database().ref(`/presence`)
        userRef.child(uid).remove().then(() => {
            firebase.logout()
        })
    }
}