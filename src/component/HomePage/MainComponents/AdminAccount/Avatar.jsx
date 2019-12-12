import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

const Avatar = (props) => {
    const [photoURL, setPhotoUrl] = useState("")
    useEffect(() => {
      const abortController = new AbortController()
      return () => {
        abortController.abort()
      }
    }, [props])
    console.log(props)
    return (
        <img
          style={{borderRadius: '50%', width: 60, display: 'block' }}
          src={(props.rowData === undefined) ? props.photoURL : props.rowData[props.type]}
          alt="avatar_created"
        />
    )
}

const mapStateToProps = ({auth}) => {
  return {
    ...auth
  }
}

export default connect(mapStateToProps, null)(Avatar)