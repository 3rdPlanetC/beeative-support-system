import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { LogoutUser } from '../../store/actions/authAction'
import '../../css/Homepage/Homepage.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
  
const Homepage = (props) => {
    return (
        <section id="home-page">
            <Header />
            <Sidebar {...props.firebase.auth} />
            <Main />
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (uid) => dispatch(LogoutUser(uid)),
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