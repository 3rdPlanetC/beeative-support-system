import React from 'react'
import { HeaderLayout } from '../../layout'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <HeaderLayout>
            <div id="header-title" style={{display: "flex"}}>
                <h1 style={{width: "20%"}}>{props.title}</h1>
                <h2 style={{textAlign: "right", width: "100%", paddingRight: "1rem"}}>Beeative Support System V.1</h2>
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