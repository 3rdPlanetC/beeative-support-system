import React from 'react'
import { Link } from 'react-router-dom'

const MainLayout = (props) => {
    /* Render */
    return (
        <div id="sidebar">
            <div id="sidebar-heading">
                <div id="sidebar-heading-logo">
                    <Link to="/" onClick={() => props.homeTitle()}>
                        <img className="" src={props.companyLogo || null} alt="Company Logo"/>
                    </Link>
                </div>
                <div id="sidebar-heading-name">
                    <h2>{props.companyName}</h2>
                </div>
            </div>
            <div id="sidebar-user">
                <div id="sidebar-user-logo">
                    <img src={props.userLogo || null} alt="User Avatar"/>
                </div>
                <div className="" id="sidebar-user-detail">
                    <div className="sidebar-user-detail-card">
                        <p>{props.displayName}</p>
                    </div>
                    <div className="sidebar-user-detail-card logout" onClick={() => props.logout()}>
                        <button className="logout-button">Logout</button>
                    </div>
                </div>
            </div>
            <div id="sidebar-menu">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout