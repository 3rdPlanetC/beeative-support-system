import React, { useState } from 'react'
import { Button, TextField ,Dialog ,DialogActions ,DialogContent ,DialogContentText ,DialogTitle } from '@material-ui/core'
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

const DialogModalSystemType = (props) => {
    const classes = useStyles()
    const [modalText, setModalText] = useState("")
    const handleModalText = (ev) => {
        setModalText(ev.target.value)
    }
    return (
        <Dialog open={props.openModalSystemType} onClose={props.handleCloseModalSystemType} fullWidth={true} maxWidth={'sm'} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Add System Type</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Typing SystemType
                </DialogContentText>
                <TextField
                    autoFocus
                    onChange={handleModalText}
                    margin="dense"
                    id="name"
                    label="Ex. Database"
                    type="text"
                    value={modalText}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseModalSystemType} color="default">
                    Cancel
                </Button>
                <ColorButton onClick={() => props.createSystemTypeData(modalText, Object.keys(props.systemType).length)} variant="contained" color="primary" className={classes.margin}>
                    Confirm
                </ColorButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogModalSystemType