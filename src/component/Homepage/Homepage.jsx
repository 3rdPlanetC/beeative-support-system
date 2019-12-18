import React from 'react'
import { compose } from 'redux'
import roleChecker from '../../hoc/user/roleChecker'
import '../../css/Homepage/Homepage.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
  
const Homepage = () => {
    return (
        <section id="home-page">
            <Header />
            <Sidebar />
            <Main />
        </section>
    )
}

const enhance = compose(
    roleChecker
)

export default enhance(Homepage)