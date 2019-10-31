import React, {useState, useEffect} from 'react'
import { SignupUser} from '../../store/actions/UserAction'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../css/SignupPage/signup.css'

const Signup = (props) => {

    /* States Setting */
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [role, setRole] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)

    /* Functions Setting */
    const stateOnChange = e => {
        switch(e.target.name) {
            case "username":
                setUsername(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "role":
                setRole(e.target.value)
                break
            case "firstName":
                setFirstName(e.target.value)
                break
            case "lastName":
                setLastName(e.target.value)
                break
            default:
                return false
        }
    }

    const stateOnSignup = e => {
        e.preventDefault()
        const inputChecking = [username, password, email, role, firstName, lastName].some((item) => {
            return item == null
        })
        if (!inputChecking) {
            props.SignupUser({
                username: `${username}@beeativesupport.com`,
                email: email,
                password: password,
                role: role,
                firstName: firstName,
                lastName: lastName
            })
        } else {
            alert('Please complete the information in the box.')
        }
    }
    
    return (
        <section id="signup-page" className="white width100 height100 posAbsolute marginAuto grid">
            <div id="signup-container" className="alignCenter">
                <form onSubmit={stateOnSignup}>
                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="user" />
                            <label style={{padding: "0 1rem"}}>Username</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="email" name="username" required onChange={(e) => stateOnChange(e)} value={username}/>
                        </div>
                    </div>

                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="lock" />
                            <label style={{padding: "0 1rem"}}>Password</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="password" name="password" required onChange={(e) => stateOnChange(e)} value={password}/>
                        </div>
                    </div>

                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="user-tag" />
                            <label style={{padding: "0 1rem"}}>Email</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="text" name="email" required onChange={(e) => stateOnChange(e)} value={email}/>
                        </div>
                    </div>

                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="user-tag" />
                            <label style={{padding: "0 1rem"}}>Role</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="text" name="role" required onChange={(e) => stateOnChange(e)} value={role}/>
                        </div>
                    </div>

                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="user-tag" />
                            <label style={{padding: "0 1rem"}}>First Name</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="text" name="firstName" required onChange={(e) => stateOnChange(e)} value={firstName}/>
                        </div>
                    </div>

                    <div className="input-container grid width100">
                        <div className="signup-container-child width75 marginLeft25">
                            <FontAwesomeIcon icon="user-tag" />
                            <label style={{padding: "0 1rem"}}>Last Name</label>
                        </div>
                        <div className="signup-container-child width75">
                            <input className="input-signup-login width100" type="text" name="lastName" required onChange={(e) => stateOnChange(e)} value={lastName}/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button className="button is-link" type="submit" onClick={(e) => stateOnSignup(e)}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      SignupUser: (user) => dispatch(SignupUser(user)),
    }
}

export default connect(null, mapDispatchToProps)(Signup)