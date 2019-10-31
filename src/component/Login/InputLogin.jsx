import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputLogin = (props) => {
    return (
        <div className="input-container grid width100">
            {/* <div className="signup-container-child width75 marginLeft25">
                <FontAwesomeIcon icon={props.icon} />
                <label style={{padding: "0 1rem"}}>{props.label}</label>
            </div>
            <div className="signup-container-child width75 alignLeft">
                <input className="input-signup-login width75" type={props.type} name={props.name} required onChange={(e) => props.stateOnChange(e)} value={props.value}/>
            </div> */}
        </div>
    )
}

export default InputLogin