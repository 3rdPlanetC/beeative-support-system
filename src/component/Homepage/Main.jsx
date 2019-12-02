import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainLayout } from '../../layout'
import { 
    Home,
    AdminAccount,
    CustomerData
} from './MainComponents/'

const Main = (props) => {
    const [userData, setUserData] = useState({
        displayName: "",
        email: "",
        photoURL: "",
    })
    useEffect(() => {
        setUserData(props)
    }, [props])
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/customers_data" component={CustomerData}/>
                <Route path="/admin_account" render={(props) => <AdminAccount {...props} userData={userData} />}/>
                <Route path="/customer_dealing" component={props => <div>Customer Dealing</div>}/>
                <Route path="/web_monitoring" component={props => <div>Web Monitoring</div>} />
                <Route path="/partner_contact" component={props => <div>Partner Contact</div>} />
                <Route component={props => <div>ERROR 404 NOT FOUND</div>} />
            </Switch>
        </MainLayout>
    )
}

export default Main