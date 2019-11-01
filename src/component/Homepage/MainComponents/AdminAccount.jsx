import React, { useState, useEffect } from 'react'
import cryptojs from 'crypto-js'
import MaterialTable from 'material-table'
import axios from 'axios'
import { connect } from 'react-redux'

import { config } from '../../../config/config'
import { tableOption } from './AdminAccount/MaterialTableOption'
import { tableState } from './AdminAccount/MaterialTableColumn'
import { Avatar } from './AdminAccount/AvatarEachRow'
import { HeaderTitle } from '../../../store/actions/titleAction'
import { createProject } from './../../../store/actions/ProjectAction';

const AdminAccount = (props) => {
  /* States Setting */
  const [selectRow, setSelectRow] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({
    ...tableState, 
    columns: [
      ...tableState.columns, 
      {
        title: 'avatar_created',
        field: 'avatar_created',
        render: rowData => <Avatar rowData={rowData} photoURL={props.photoURL} type="avatar_created"/>,
        editable: 'never',
        filtering: false,
        export: false
      },
      {
        title: 'avatar_modified',
        field: 'avatar_modified',
        render: rowData => <Avatar rowData={rowData} photoURL={props.photoURL} type="avatar_modified"/>,
        editable: 'never',
        filtering: false,
        export: false
      },
    ]
  })

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    if (props.match.url === "/admin_account") {
      readData(signal)
      props.HeaderTitle("Admin Accounts")
    }
    return () => {
      abortController.abort()
    }
  }, [props.match.url])

  /* Functions Setting */
  const readData = async (signal) => {
    const res = await axios.get('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/manage/manageadmin/masterdata', {signal: signal})
    const data = await res.data
    const decryptData = await data.map(item => {
      const decryptPassword = cryptojs.AES.decrypt(item.password, config.crypto_secret).toString(cryptojs.enc.Utf8)
      return {...item, password: decryptPassword}
    })
    setTimeout(() => {
      setState({...state, data:decryptData})
      setIsLoading(false)
    }, 500)
  }

  const createData = newData => {
      return new Promise(resolve => {
        setTimeout( async () => {
          resolve()
          const adding = {
            date_created: new Date().toLocaleDateString(),
            date_modified: new Date().toLocaleDateString(),
            avatar_created: props.photoURL,
            avatar_modified: props.photoURL,
          }
          const data = [...state.data, {
            ...newData,
            ...adding,
            id: "Generating..."
          }]
          const enCryptNewData = [{
            ...newData,
            ...adding,
            password: cryptojs.AES.encrypt(newData.password, config.crypto_secret).toString(), 
          }]
          setState({ ...state, data })
          /* START API */
          try {
            const res = await axios.post('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/manage/manageadmin/masterdata', {
              operation: "insert",
              data: [...enCryptNewData]
            })
            alert(`Loading Data ${res.statusText}`)
          } catch (error) {
            alert(error)
          }
          /* END API */
        }, 500)
      })
  }

  const updateData = (newData, oldData) => {
    return new Promise(resolve => {
      setTimeout(async () => {
        resolve()
        const adding = {
          date_modified: new Date().toLocaleDateString(),
          avatar_modified: props.photoURL
        }
        const data = [...state.data]
        data[data.indexOf(oldData)] = {
          ...newData,
          ...adding
        }
        const enCryptNewData = {
          ...newData,
          ...adding,
          password: cryptojs.AES.encrypt(newData.password, config.crypto_secret).toString(),
        }
        const enCryptOldData = {
          ...oldData, 
          password:cryptojs.AES.encrypt(oldData.password, config.crypto_secret).toString()
        }
        delete enCryptNewData.tableData
        delete enCryptOldData.tableData
        setState({ ...state, data })
        /* START API */
        try {
          const res = await axios.post('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/manage/manageadmin/masterdata', {
            operation: "update",
            data: [
              enCryptOldData, enCryptNewData
            ]
          })
          alert(`Update Data ${res.statusText}`)
        } catch (error) {
          alert(error)
        }
        /* END API */
      }, 500)
    })
  }

  const deleteData = oldData => {
    return new Promise(resolve => {
      setTimeout(async () => {
        resolve()
        const data = [...state.data]
        data.splice(data.indexOf(oldData), 1)
        setState({ ...state, data })
        /* START API */
        try {
          const res = await axios.post('https://cors-anywhere.herokuapp.com/http://beeativesupportcom.beeative.codeorange.host/manage/manageadmin/masterdata', {
            operation: "delete",
            data: [oldData]
          })
          alert(`Delete Data ${res.statusText}`)
        } catch (error) {
          alert(error)
        }
        /* END API */
      }, 1000)
    })
  }

  const createCustomerProject = () => {
    return new Promise(resolve => {
      setTimeout(async () => {
        resolve()
        props.createProject({
          project_id: "99",
          project_name: "exxon"
        })
      }, 500)
    })

  }

  return (
      <MaterialTable
        {...tableOption(
          isLoading,
          setSelectRow,
          state.columns,
          state.data,
          selectRow,
          createData,
          updateData,
          deleteData,
          readData,
          createCustomerProject
        )}
      />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    HeaderTitle: (title) => dispatch(HeaderTitle(title)),
    createProject: (project) => dispatch(createProject(project))
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount)