import React, {useEffect, Fragment, lazy, Suspense} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { CurrentUser } from '../store/actions/authAction'
import { LoadingLayout } from '../layout'
import { LoginPage } from './LoginPage'

const HomePage = lazy(() => import('./HomePage/HomePage'))

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
            <HomePage />
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
          <Route component={LoginPage}/>
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
