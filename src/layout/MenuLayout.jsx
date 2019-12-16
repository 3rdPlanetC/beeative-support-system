import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'

const MenuLayout = (props) => {
    return (
        <NavLink to={props.route} 
            activeClassName="sidebar-menu-item-active" 
        >
            <Button variant="contained" className="sidebar-menu-item">
                <div className="sidebar-menu-item-icon">
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <div className="sidebar-menu-item-title">
                    <span className="sidebar-menu-item-child">{props.children}</span>
                </div>
            </Button>
        </NavLink>
    )
}

export default MenuLayout
