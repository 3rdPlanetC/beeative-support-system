import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderTitle } from '../store/actions/titleAction'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuLayout = (props) => {
    return (
        <NavLink to={props.route} 
            activeClassName="sidebar-menu-item-active" 
            onClick={() => props.HeaderTitle(props.children)}>
            <div className="sidebar-menu-item">
                <div className="sidebar-menu-item-icon">
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <div className="sidebar-menu-item-title">
                    <span className="sidebar-menu-item-child">{props.children}</span>
                </div>
            </div>
        </NavLink>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        HeaderTitle: (title) => dispatch(HeaderTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(MenuLayout)
