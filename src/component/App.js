import React, {lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadingLayout } from '../layout'
import { compose } from 'redux'
import Cookies from 'universal-cookie'
import cryptojs from 'crypto-js'

const cookies = new Cookies();
const LoginPage = lazy(() => import('./LoginPage/LoginPage'))
const HomePage = lazy(() => import('./HomePage/Homepage'))
let cookieChecker

const App = (props) => {
  const isAuth = props.firebase
  if (cookies.get('FAUTH') != undefined) {
    cookieChecker = cryptojs.AES.decrypt(cookies.get('FAUTH'), "beeative_never_die!").toString(cryptojs.enc.Utf8)
  }
  // useEffect(() => {
  //   localStorage.setItem('myValueInLocalStorage', "test")
  // }, [])
  return (
    <BrowserRouter
      forceRefresh={true}
    >
      <div id="app">
          <Route path="/" render={props => (
            <Suspense fallback={<LoadingLayout />}>
              {cookieChecker%1 === 0 ? (
                isAuth.auth.isLoaded == true ? (
                    <HomePage {...props}/>
                ) : (
                  <LoadingLayout />
                )
              ) : (
                <LoginPage {...props}/>
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
