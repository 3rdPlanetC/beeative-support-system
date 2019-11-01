import React, {useState, useEffect} from 'react'
import BeeativeLogo from '../../images/beeative-logo.png'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { HeaderTitle } from '../../store/actions/titleAction'
import '../../css/Homepage/Homepage.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
  
const Homepage = (props) => {
  /* States Setting */
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  })

  /* UseEffect Setting */
  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  /* Render */
    return (
      <section id="homepage">
          <Header />
          <Sidebar  {...user} Logo={BeeativeLogo} companyName="Beeative"/>
          <Main {...props}/>
      </section>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    HeaderTitle: title => dispatch(HeaderTitle(title))
  }
}

const mapStateToProps = ({firestore, user}) => {
  return {
    firestore,
    user
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'users_role'}
  ])
)(Homepage)