import React from 'react'
import { connect } from 'react-redux'
import { LogoutUser } from '../../store/actions/authAction'
import { HeaderTitle } from '../../store/actions/titleAction'
import { SidebarLayout, MenuLayout } from '../../layout'
import UserImage from '../../images/user.jpg'
import { Menu } from '../../config/sidebar/Menu'
import { company } from './../../config/sidebar/Company'

const Sidebar = (props) => {
    const stateOnLogout = () => {
        const check = window.confirm('Are you sure want to logout?')
        if (check) {
            props.LogoutUser()
        }
    }
    return (
        <SidebarLayout 
            companyName={company.name}
            displayName={props.displayName}
            userLogo={props.photoURL ? props.photoURL : UserImage}
            companyLogo={company.logo}
            logout={() => {stateOnLogout()}}
            homeTitle={() => props.HeaderTitle("Home")}
        >
            {Menu.map((item, index) => 
                <MenuLayout key={index} route={item.route} icon={item.icon}>{item.name}</MenuLayout>
            )}
        </SidebarLayout>
    )
}

const mapStateToProps = ({firebase}) => {
    return {
        photoURL: firebase.auth.photoURL,
        displayName: firebase.auth.displayName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      LogoutUser: () => dispatch(LogoutUser()),
      HeaderTitle: (title) => dispatch(HeaderTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)