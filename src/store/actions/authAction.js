import cryptojs from 'crypto-js'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const GoogleLogin = () => {
    return (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.login({
            provider: 'google',
            type: 'popup'
        }).then((res) => {
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
                window.location.reload()
            } else {
                firebase.logout().then(() => {
                    cookies.remove(`FAUTH`)
                    window.location.reload()
                })
                 alert("Error Message : Please Signin by youremail@beeative.com")
            }
            // console.log(res)
            // console.log(res.credential)
        }).catch(err => {
            console.log(err)
        })
    }
}

export const LogoutUser = () => {
    return (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.logout().then(() => {
            cookies.remove(`FAUTH`)
            window.location.reload()
        })
    }
}