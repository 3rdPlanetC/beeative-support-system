import React, { useState } from 'react'
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import { roles } from './../../config/user/roles'
import { yellow } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    yellow: {
        color: theme.palette.getContrastText(yellow[700]),
        backgroundColor: yellow[700],
    },
}))

const DialogModalRole = (props) => {
    const classes = useStyles()

    const handleClose = (value, bool = true) => {
        props.createUserRole(value, props.uid)
    }

    return (   
        <Dialog 
            onClose={handleClose} 
            aria-labelledby="simple-dialog-title" 
            open={true}
            disableBackdropClick 
            maxWidth={'md'}
        >
            <DialogTitle id="simple-dialog-title">
                This is the first time you access it. Select your role what you are.
            </DialogTitle>
            <List>
                {roles.map((role, index) => (
                    <ListItem button onClick={() => handleClose(role.role, false)} key={index}>
                        <ListItemAvatar>
                            <Avatar className={classes.yellow}>
                                <Icon >{role.icon}</Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={role.role} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}

export default DialogModalRole
