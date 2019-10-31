import React, {useEffect, Fragment, lazy, Suspense} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { CurrentUser } from '../store/actions/UserAction'
import LoadingLayout from '../layout/LoadingLayout'
import '../css/app.css'
import {Login} from './Login'

const Homepage = lazy(() => import('./Homepage/Homepage'))

const App = (props) => {
  /* useEffect Setting */
  useEffect(() => {
    const abortController = new AbortController()
    props.CurrentUser()
    return () => {
      abortController.abort()
    }
  }, [])
  /* Render */
  if (props.auth.currentLogin) {
    return (
      <BrowserRouter>
        <div id="app">
          <Suspense fallback={<LoadingLayout />}>
            <Homepage />
          </Suspense>
        </div>
      </BrowserRouter>
    )
  } else if (!props.auth.currentLogin && props.auth.currentLogin !== null) {
    return <LoadingLayout />
  }
  return (
    <BrowserRouter>
      <div id="app">
        <Fragment>
          <Route exact path="/" component={Login}/>
          <Route component={Login}/>
        </Fragment>
      </div>
    </BrowserRouter>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    CurrentUser: () => dispatch(CurrentUser()),
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
