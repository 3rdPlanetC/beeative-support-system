import React, {useState, useEffect} from 'react'
import { GoogleLogin } from '../../store/actions/authAction'
import { connect } from 'react-redux'
import Logo from '../../images/beeative-logo-word.png'
import ButtonLogin from './ButtonLogin'
import LogoLogin from './LogoLogin'
import '../../css/LoginPage/login.css'

const LoginPage = (props) => {
    
    /* UseEffect Setting */
    useEffect(() => {
        if (props.match.isExact === false) {
            window.location.href = "/"
        }
        return () => {
            console.log('unmount')
        }
    }, [props])

    return (
        <section id="login-page">
            <div id="login-container">
                <LogoLogin logo={Logo}/>
                <ButtonLogin GoogleLogin={props.GoogleLogin}/>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      GoogleLogin: () => dispatch(GoogleLogin())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)