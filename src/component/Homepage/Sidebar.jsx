import React from 'react'
import { connect } from 'react-redux'
import { LogoutUser } from '../../store/actions/authAction'
import { HeaderTitle } from '../../store/actions/titleAction'
import { SidebarLayout, MenuLayout } from '../../layout'
import UserImage from '../../images/user.jpg'
import { Menu } from '../../config/sidebar/Menu'

const Sidebar = (props) => {
    /* Functions Setting */
    const stateOnLogout = () => {
        const check = window.confirm('Are you sure want to logout?')
        if (check) {
            props.LogoutUser()
        }
    }
    return (
        <SidebarLayout 
            companyName={props.companyName || null}
            displayName={props.displayName}
            userLogo={props.photoURL ? props.photoURL : UserImage}
            companyLogo={props.Logo || null}
            logout={stateOnLogout}
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
      LogoutUser: () => dispatch(LogoutUser()),
      HeaderTitle: (title) => dispatch(HeaderTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar)