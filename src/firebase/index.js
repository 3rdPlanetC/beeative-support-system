import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.firestore()
}

// export const database = firebase.database().ref('posts/')
// export const auth = firebase.auth()
// export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default firebase