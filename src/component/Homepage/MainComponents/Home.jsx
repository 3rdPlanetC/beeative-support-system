import React, {lazy, Suspense} from 'react'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect ,isLoaded, isEmpty } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Grid, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LoadingLayout } from '../../../layout'
import '../../../css/Homepage/Home/Home.css'

const UserOnline = lazy(() => import('./Home/UserOnline'))

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      color: "white"
    },
    demo: {
      backgroundColor: "black",
      color: "white"
    },
    title: {
      margin: theme.spacing(4, 0, 2),
      color: "white"
    },
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

const mapStateToProps = ({firestore, firebase}) => {
    return {
        users: firestore.ordered.users,
        presence: firebase.data.presence
    }
}

const enhance = compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        "users"
    ]),
    firebaseConnect([
        "presence"
    ])
)

export default enhance(Home)