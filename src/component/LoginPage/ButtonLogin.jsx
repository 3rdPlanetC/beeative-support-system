import React from 'react'
import Logo from '../../images/google.svg'

const ButtonLogin = (props) => {
    return (
        <div id="login-button">
            <div id="login-button-wrapper">
                <button className="google-button" onClick={() => props.GoogleLogin()}>
                    <span className="google-button__icon">
                        <img src={Logo} alt=""/>
                    </span>
                    <span className="google-button__text">Sign in with Google</span>
                </button>
            </div>
        </div>
    )
}

export default ButtonLogin