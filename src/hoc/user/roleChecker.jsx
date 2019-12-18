import React, { Fragment, useState } from "react"
import { connect } from 'react-redux'
import { createUserRole } from './../../store/actions/userAction'
import DialogModalRole from './DialogModalRole'
import { LoadingLayout } from "../../layout"

const roleChecker = (Component) => {    
    function roleWrapper(props) {
        if (props.role === undefined && !props.firebase.profile.isEmpty) {
            return (
                <Fragment>
                    <Component {...props} />
                    <DialogModalRole 
                        uid={props.uid}
                        createUserRole={props.createUserRole}
                        role={props.role}
                    />
                </Fragment>
            )
        } else if (props.firebase.profile.isEmpty) {
            return <LoadingLayout />
        }
        return <Component {...props} />
    }

    const mapStateToProps = ({firebase}) => {
        return {
            role: firebase.profile.role,
            uid: firebase.auth.uid,
            firebase: firebase
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            createUserRole: (role, uid) => dispatch(createUserRole(role, uid))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(roleWrapper)
}

export default roleChecker