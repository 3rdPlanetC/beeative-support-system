import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import './css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLock, faUserTag, faUserTie, faCommentsDollar, faTv, faAddressBook, faUsers, faChartPie } from '@fortawesome/free-solid-svg-icons'
import firebase from './firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

library.add(faLock, faUserTag, faUserTie, faCommentsDollar, faTv, faAddressBook, faUsers, faChartPie)

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, {
            userProfile: 'users',
            presence: 'presence',
            sessions: 'sessions',
            useFirestoreForProfile: true,
        })
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')    
)