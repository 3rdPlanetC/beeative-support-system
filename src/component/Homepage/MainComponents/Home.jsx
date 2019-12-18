import React, { lazy, Suspense } from 'react'
import roleChecker from './../../../hoc/user/roleChecker'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect ,isLoaded, isEmpty } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Grid, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LoadingLayout } from '../../../layout'
import { createUserRole } from './../../../store/actions/userAction'
import '../../../css/Homepage/Home/Home.css'

const UserOnline = lazy(() => import('./Home/UserOnline'))

const useStyles = makeStyles(() => ({
    demo: {
      backgroundColor: "black",
      color: "white"
    }
}))

const Home = (props) => {
    const classes = useStyles()
    const { users = [], presence = {} } = props

    return (
        <div id="online-user">
            <h2 style={{color: "white"}}>Online User</h2>
            <Grid item xs={12} md={12}>
                <div className={classes.demo}>
                    <List dense={false}>
                        {!isLoaded(users, presence) ? 'Loading...' : !isEmpty ? (
                            'No Data'
                        ) : (
                            <Suspense fallback={<LoadingLayout />}>
                                <UserOnline users={users} presence={presence}/>
                            </Suspense>
                        )}
                    </List>
                </div>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUserRole: (role, uid, callback) => dispatch(createUserRole(role, uid, callback))
    }
}

const mapStateToProps = ({firestore, firebase}) => {
    return {
        users: firestore.ordered.users,
        presence: firebase.data.presence,
    }
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        "users"
    ]),
    firebaseConnect([
        "presence"
    ]),
)

export default enhance(Home)