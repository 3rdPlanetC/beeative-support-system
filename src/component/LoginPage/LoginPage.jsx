import React, { useEffect } from 'react'
import { GoogleLogin } from '../../store/actions/authAction'
import { connect } from 'react-redux'
import Logo from '../../images/beeative-logo-word.png'
import ButtonLogin from './LoginComponent/ButtonLogin'
import LogoLogin from './LoginComponent/LogoLogin'
import '../../css/LoginPage/login.css'

const LoginPage = (props) => {
    /* useEffect Setting */
    useEffect(() => {
        const abortController = new AbortController()
        if (props.match.isExact === false) {
            window.location.href = "/"
        }
        return () => {
            abortController.abort()
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
      GoogleLogin: (callback) => dispatch(GoogleLogin(callback))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)