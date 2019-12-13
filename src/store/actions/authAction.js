import cryptojs from 'crypto-js'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const GoogleLogin = () => {
    return (dispatch, state, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userRef = firestore.collection("users")
        firebase.login({
            provider: 'google',
            type: 'popup'
        }).then(res => {
            if (res.additionalUserInfo.profile.hd === "beeative.com") {
                const dateNow = new Date().getTime()
                const value = cryptojs.AES.encrypt(`${dateNow}`, "beeative_never_die!").toString()
                cookies.set(
                    'FAUTH',
                    value,
                    { 
                        path: '/',
                        maxAge: 24*60*60
                    }
                )
                userRef.doc(res.user.uid).set({
                    online: true,
                }, { merge: true})
                window.location.reload()
            } else {
                firebase.logout().then(() => {
                    cookies.remove(`FAUTH`)
                    window.location.reload()
                })
                 alert("Error Message : Please Signin by youremail@beeative.com")
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const LogoutUser = (uid) => {
    return (dispatch, state, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const userRef = firestore.collection("users")
        userRef.doc(uid).set({
            online: false,
        }, { merge: true}).then(() => {
            firebase.logout().then(() => {
                cookies.remove(`FAUTH`)
                window.location.reload()
            })
        })
    }
}