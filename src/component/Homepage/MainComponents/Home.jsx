import React from 'react'
import { compose } from 'redux'
import { firestoreConnect ,isLoaded, isEmpty } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles'
import { Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, Badge } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: "black",
      color: "white"
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
}))

const StyledBadge2 = withStyles(theme => ({
    badge: {
      backgroundColor: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid #44b700',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const Home = (props) => {
    const classes = useStyles()
    const { users } = props
    return (
        <div>
            <h2 style={{color: "white"}}>Online User</h2>
            <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                    <List dense={false}>
                    {!isLoaded(users) ? 'Loading...' : !isEmpty ? (
                        'No Data'
                    ) : (
                        users.map((data,index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                    <StyledBadge2
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        variant={data.online ? 'dot' : 'standard'}
                                    >
                                    <Avatar alt={`${data.displayName} Images`} src={data.avatarUrl} />
                                    </StyledBadge2>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={data.displayName}
                                    />
                                </ListItem>
                            )
                        })
                    )}
                    </List>
                </div>
            </Grid>
        </div>
    )
}

const mapStateToProps = ({firestore}) => {
    return {
        users: firestore.ordered.users
    }
}

const enhance = compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        "users"
    ])
)

export default enhance(Home)