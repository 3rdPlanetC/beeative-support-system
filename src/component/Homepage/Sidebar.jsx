import React from 'react'
import {SidebarLayout, MenuLayout} from '../../layout'

const menu = [
    {
        route: "customers_data",
        icon: "chart-pie",
        name: "Customers Data"
    },
    {
        route: "admin_account",
        icon: "address-book",
        name: "Admin Accounts"
    },
    {
        route: "customer_dealing",
        icon: "comments-dollar",
        name: "Customer Dealing"
    },
    {
        route: "web_monitoring",
        icon: "tv",
        name: "Web Monitoring"
    },
    {
        route: "partner_contact",
        icon: "user-tie",
        name: "Partner Contact"
    }
]

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