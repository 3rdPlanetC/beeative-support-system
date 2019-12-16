import React, {lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadingLayout } from '../layout'
import { compose } from 'redux'
// import Cookies from 'universal-cookie'
// import cryptojs from 'crypto-js'
import firebase from 'firebase'

// const cookies = new Cookies();
const LoginPage = lazy(() => import('./LoginPage/LoginPage'))
const HomePage = lazy(() => import('./HomePage/Homepage'))
// let cookieChecker

const App = (props) => {
  const [authUser,setAuthUser] = useState(null)
  const [authWasListened,setAuthWasListened] = useState(false)
  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((authUser) => {
        if(authUser) {
          setAuthUser(authUser)
          setAuthWasListened(true)
        } else {
          setAuthUser(null)
          setAuthWasListened(true)
        }
      }
    )
    return () => authListener()
  }, [])
  const isAuth = props.firebase
  return (
    <BrowserRouter
      forceRefresh={true}
    >
      <div id="app">
          <Route path="/" render={props => (
            <Suspense fallback={<LoadingLayout />}>
              {authWasListened ? (
                  authUser !== null ? (
                    isAuth.auth.isLoaded === true ? (
                      <HomePage {...props}/>
                    ) : (
                      <LoadingLayout />
                    )
                  ) : (
                    <LoginPage {...props}/>
                  )
              ) : (
                <LoadingLayout />
              )}
            </Suspense>
          )}/>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = ({firebase}) => {
  return {
    firebase
  }
}

export default compose(
    connect(mapStateToProps, null),
)(App)
