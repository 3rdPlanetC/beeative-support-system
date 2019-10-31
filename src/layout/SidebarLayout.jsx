import React from 'react'
import { connect } from 'react-redux'
import { LogoutUser } from '../store/actions/UserAction'
import { HeaderTitle } from '../store/actions/SidebarAction'
import { Link } from 'react-router-dom'

const MainLayout = (props) => {
    /* Functions Setting */
    const stateOnLogout = () => {
        const check = window.confirm('Are you sure want to logout?')
        if (check) {
            props.LogoutUser()
        }
    }
    /* Render */
    return (
        <div id="sidebar" className="grid">
            <div className="flex" id="sidebar-heading">
                <div className="marginAuto alignCenter width50" id="sidebar-heading-1">
                    <Link to="/" onClick={() => props.HeaderTitle("Home")}>
                        <img className="" src={props.companyLogo || null} alt="Company Logo"/>
                    </Link>
                </div>
                <div className="marginAuto width50" id="sidebar-heading-2">
                    <h2 className="alignCenter">{props.companyName}</h2>
                </div>
            </div>
            <div className="flex" id="sidebar-user">
                <div className="width50 marginAuto alignCenter" id="sidebar-user-1">
                    <img className="width100" src={props.userLogo || null} alt="User Avatar" style={{width: "75px", height: "75px"}}/>
                </div>
                <div className="" id="sidebar-user-2">
                    <div className="sidebar-user-2-card">
                        <p className="alignCenter width100">{props.displayName}</p>
                    </div>
                    <div className="sidebar-user-2-card logout-button cursorPointer" onClick={() => stateOnLogout()}>
                        <button className="width75 borderNone cursorPointer">Logout</button>
                    </div>
                </div>
            </div>
            <div id="sidebar-menu" className="">
                {props.children}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      LogoutUser: () => dispatch(LogoutUser()),
      HeaderTitle: (title) => dispatch(HeaderTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(MainLayout)