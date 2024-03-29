import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import config from './config'

firebase.initializeApp(config)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase