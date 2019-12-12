import React from 'react'

const Avatar = (props) => {
    return (
        <img
          style={{borderRadius: '50%', width: 60, display: 'block' }}
          src={(props.rowData === undefined) ? props.photoURL : props.rowData[props.type]}
          alt="avatar_created"
        />
    )
}

export default Avatar