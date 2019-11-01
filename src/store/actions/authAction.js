import firebase from '../../firebase'

export const LogoutUser = () => {
    return (dispatch, state) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'LOGOUT', value: false})
            })
            .catch(err => {
                console.log("ERROR LOGOUT : "+err)
            })
    }
}
export const CurrentUser = () => {
    return (dispatch, state) => {
        firebase.auth().onAuthStateChanged( async res => {
            if (res === null) {
                dispatch({type: 'CURRENT_LOGIN', value: null})
            } else {
                dispatch({type: 'CURRENT_LOGIN', value: true})
                dispatch({type: 'USER_PROFILE', value: {...res}})
            }
        })
    }
}
export const GoogleLogin = () => {
    return (dispatch, state) => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.setCustomParameters({
            prompt: 'select_account'
        })
        firebase.auth().signInWithRedirect(provider).then(async res => {
            if (res.additionalUserInfo.profile.hd === "beeative.com") {
                console.log(res.credential)
            } else {
                firebase.auth().signOut()
                alert("Error Message : Please Signin by youremail@beeative.com")
            }
        }).catch(err => {
            firebase.auth().signOut()
            alert(`${err}`)
        })
    }
}