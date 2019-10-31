import firebase from '../../firebase'
import axios from 'axios'
import { config } from '../../config/config'

export const LoginUser = (user) => {
    return (dispatch, state) => {
        firebase.auth().signInWithEmailAndPassword(user.username, user.password)
            .then(res => {
                alert("Login Success!")
                dispatch({type: "LOGIN", value: res})
            })
            .catch(err => {
                alert("That Beative Support account doesn't exist Please try again : "+ err)
                window.location.href = "/"
                console.log(err)
            })
    }
}

export const SignupUser = (user) => {
    return (dispatch, state, { getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(user.username, user.password).catch(err => console.log(err))
        firestore.collection('users_role').add({
            username: user.username.replace('@beeativesupport.com', ""),
            email: user.email,
            role: user.role,
            firstName: user.firstName.toLowerCase(),
            lastName: user.lastName.toLowerCase(),
        })
        .then((res) => {
            window.location.href = "/"
        })
        .catch((err) => {
            console.log("ERROR SIGNUP : "+ err)
        })
    }
}

export const LogoutUser = () => {
    return (dispatch, state) => {
        firebase.auth().signOut()
            .then(res => {
                // dispatch({type: "LOGOUT", value: null})
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
                // const magentoAuth = await axios.post('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/index.php/rest/V1/integration/admin/token', {
                //     "username": res.email,
                //     "password": config.magento_password
                // })
                console.log(res)
                dispatch({type: 'CURRENT_LOGIN', value: true})
                dispatch({type: 'USER_PROFILE', value: {...res/*, magento_token: magentoAuth.data*/}})
                // console.log({...res, magento_token: magentoAuth.data})
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
                // const profile = res.additionalUserInfo.profile
                // const magentoAuth = await axios.post('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/index.php/rest/V1/integration/admin/token', {
                //     "username": profile.email,
                //     "password": config.magento_password
                // })
                // dispatch({type: 'USER_PROFILE', value: {...profile, magento_token: magentoAuth.data}})
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