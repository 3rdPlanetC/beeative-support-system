import React from 'react'
import { connect } from 'react-redux'
import { LogoutUser } from '../../store/actions/authAction'
import { HeaderTitle } from '../../store/actions/titleAction'
import { SidebarLayout, MenuLayout } from '../../layout'
import UserImage from '../../images/user.jpg'
import { Menu } from '../../config/sidebar/Menu'
import { company } from './../../config/sidebar/Company'

const Sidebar = (props) => {
    const stateOnLogout = (uid) => {
        const check = window.confirm('Are you sure want to logout?')
        if (check) {
            props.LogoutUser(uid)
        }
    }
    return (
        <SidebarLayout 
            companyName={company.name}
            displayName={props.displayName}
            userLogo={props.photoURL ? props.photoURL : UserImage}
            companyLogo={company.logo}
            logout={() => {stateOnLogout(props.uid)}}
            homeTitle={() => props.HeaderTitle("Home")}
        >
            {Menu.map((item, index) => 
                <MenuLayout key={index} route={item.route} icon={item.icon}>{item.name}</MenuLayout>
            )}
        </SidebarLayout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      LogoutUser: (uid) => dispatch(LogoutUser(uid)),
      HeaderTitle: (title) => dispatch(HeaderTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)