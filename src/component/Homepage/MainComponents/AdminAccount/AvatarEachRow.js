import React from 'react'

export function Avatar({rowData, photoURL, type}) {
    return (
        <img
          style={{ height: 60, borderRadius: '50%', width: 60 }}
          src={rowData === undefined ? photoURL : rowData[type]}
          alt="avatar_created"
        />
    )
}