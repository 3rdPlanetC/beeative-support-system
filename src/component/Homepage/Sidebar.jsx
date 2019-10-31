import React from 'react'
import {SidebarLayout, MenuLayout} from '../../layout'
import { menu } from '../../config/config'

const Sidebar = (props) => {
    return (
        <SidebarLayout 
            companyName={props.companyName || null}
            displayName={props.displayName}
            userLogo={props.photoURL ? props.photoURL : "https://avatars.servers.getgo.com/2205256774854474505_medium.jpg"}
            companyLogo={props.Logo || null}
        >
            {menu.map((item, index) => 
                <MenuLayout key={index} route={item.route} icon={item.icon}>{item.name}</MenuLayout>
            )}
        </SidebarLayout>
    )
}

export default Sidebar