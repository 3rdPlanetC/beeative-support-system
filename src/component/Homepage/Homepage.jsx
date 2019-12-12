import React, {useState, useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { HeaderTitle } from '../../store/actions/titleAction'
import '../../css/Homepage/Homepage.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
  
const Homepage = (props) => {
  /* States Setting */
  const isAuth = props.firebase
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  })
  /* UseEffect Setting */
  useEffect(() => {
    setUser(props.firebase.auth)
  }, [])
  /* Render */
    return (
      <Fragment>
        {!isAuth.auth.isEmpty != true ? 'Loading' : (
          <section id="home-page">
            <Header />
            <Sidebar {...props.firebase.auth} />
            <Main {...props.firebase.auth}/>
          </section>
        )}
      </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    HeaderTitle: title => dispatch(HeaderTitle(title))
  }
}

const mapStateToProps = ({firebase}) => {
  return {
    firebase,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Homepage)