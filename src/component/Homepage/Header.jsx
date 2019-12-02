import React from 'react'
import { HeaderLayout } from '../../layout'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <HeaderLayout>
            <div id="header-title" style={{display: "flex", height: "100%"}}>
                <div style={{width: "50%",margin: "auto"}}>
                    <h2 style={{padding: "0 2rem"}}>{props.title}</h2>
                </div>
                <div style={{width: "50%",margin: "auto"}}>
                    <h2 style={{float: "right", padding: "0 2rem"}}>Beeative Support System Version 1.2.3</h2>
                </div>
            </div>
        </HeaderLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Header)