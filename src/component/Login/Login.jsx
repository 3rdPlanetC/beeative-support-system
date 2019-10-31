import React, {useState, useEffect} from 'react'
import { LoginUser, GoogleLogin } from '../../store/actions/UserAction'
import { connect } from 'react-redux'
import Logo from '../../images/beeative-logo-word.png'

import '../../css/LoginPage/login.css'
import InputLogin from './InputLogin'
import ButtonLogin from './ButtonLogin'

const Login = (props) => {

    /* States Setting */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    /* Functions Setting */
    const stateOnChange = e => {
        switch(e.target.name) {
            case "username":
                setUsername(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            default:
                return false
        }
    }

    const stateOnLogin = e => {
        e.preventDefault()
        // props.LoginUser({
        //     username: `${username}@beeativesupport.com`,
        //     password: password
        // })
        alert("Signup has been disabled.")
    }
    
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
        <section id="login-page" className="white width100 height100 bgBlack posAbsolute marginAuto grid">
            <div id="login-container" className="alignCenter">
                <div id="login-logo" className="">
                    <img src={Logo} className="width100" alt="Company Logo"/>
                </div>
                <div onSubmit={stateOnLogin}>
                    <InputLogin icon="user" 
                        label="Username" name="username" 
                        value={username} type="text" 
                        stateOnChange={stateOnChange}
                    />
                    <InputLogin icon="lock" 
                        label="Password" name="password" 
                        value={password} type="password" 
                        stateOnChange={stateOnChange}
                    />
                    <ButtonLogin stateOnLogin={stateOnLogin} GoogleLogin={props.GoogleLogin}/>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      LoginUser: (user) => dispatch(LoginUser(user)),
      GoogleLogin: () => dispatch(GoogleLogin())
    }
}

export default connect(null, mapDispatchToProps)(Login)