import authReducer from './authReducer'
import userReducer from './userReducer'
import titleReducer from './titleReducer';

import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    title: titleReducer,
    firestore: firestoreReducer
})

export default rootReducer