import React from 'react'
import {Button, TextField ,Dialog ,DialogActions ,DialogContent ,DialogContentText ,DialogTitle} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'

const ColorButton = withStyles(() => ({
    root: {
        backgroundColor: yellow[700],
        '&:hover': {
            backgroundColor: yellow[800],
        },
    },
  }))(Button)
  
const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

const DialogModal = (props) => {
    const classes = useStyles()
    return (
        <Dialog open={props.openModal} onClose={props.handleCloseModal} fullWidth={true} maxWidth={'sm'} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Add Customer ID</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Typing Customer ID
                </DialogContentText>
                <TextField
                    autoFocus
                    onChange={props.handleModalText}
                    margin="dense"
                    id="name"
                    label="Ex. Phutawan"
                    type="text"
                    value={props.modalText}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseModal} color="default">
                    Cancel
                </Button>
                <ColorButton onClick={props.createCustomerData} variant="contained" color="primary" className={classes.margin}>
                    Confirm
                </ColorButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogModal