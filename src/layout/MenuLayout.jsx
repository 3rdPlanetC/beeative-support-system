import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderTitle } from '../store/actions/SidebarAction'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuLayout = (props) => {
    return (
        <NavLink to={props.route} activeClassName="sidebar-menu-item-active" onClick={() => props.HeaderTitle(props.children)}>
            <div className="sidebar-menu-item flex">
                <div className="width15 alignCenter">
                    <FontAwesomeIcon icon={props.icon} className="width100 height100"/>
                </div>
                <div className="">
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