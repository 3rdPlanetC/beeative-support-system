import React from 'react'

export function Avatar({rowData, photoURL, type}) {
    return (
        <img
          style={{borderRadius: '50%', width: 60, display: 'block' }}
          src={rowData === undefined ? photoURL : rowData[type]}
          alt="avatar_created"
        />
    )
}