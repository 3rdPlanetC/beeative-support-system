import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
}))(Badge)

const UserOnline = (props) => {
    return (
        props.users.map((user, userIndex) => {
            let check;
            if (user.id !== null && props.presence !== null) {
                check = props.presence[user.id] !== null ? props.presence[user.id] : false
            }
            return (
                <ListItem key={userIndex}>
                    <ListItemAvatar>
                        <StyledBadge2
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant={check ? 'dot' : 'standard'}
                        >
                            <Avatar alt={`${user.displayName} Images`} src={user.avatarUrl} />
                        </StyledBadge2>
                    </ListItemAvatar>
                    <ListItemText
                        primary={user.displayName}
                        secondary={user.role}
                    />
                </ListItem>
            )
        })
    )
}

export default UserOnline