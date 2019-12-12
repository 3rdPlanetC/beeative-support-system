import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
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

const mapStateToProps = ({firebase}) => {
  return {
    firebase,
  }
}

export default compose(
  connect(mapStateToProps),
)(Homepage)