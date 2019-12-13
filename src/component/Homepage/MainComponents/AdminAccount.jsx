import React, { useState, useEffect, Fragment } from 'react'
import DataTable from './AdminAccount/DataTable'
import DialogModalCustomerId from './AdminAccount/DialogModalCustomerId'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { HeaderTitle } from '../../../store/actions/titleAction'
import { createProject, deleteProject, updateProject, createCustomerId } from '../../../store/actions/ProjectAction'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


const AdminAccount = (props) => {
  const [selectRow, setSelectRow] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  useEffect(() => {
    const abortController = new AbortController()
    if (props.match.url === "/admin_account") {
      props.HeaderTitle("Admin Accounts")
    }
    return () => {
      abortController.abort()
    }
  }, [props.match.url])
 
  const createData = async newData => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          const adding = {
            note_id: props.customer_project.length + 1,
            date_created: new Date().toDateString(),
            date_modified: new Date().toDateString(),
            avatar_created: props.userData.photoURL,
            avatar_modified: props.userData.photoURL,
          }
          props.createProject({
            ...newData,
            ...adding,
          })
        }, 500)
      })
  }

  const updateData = (newData, oldData) => {
    return new Promise(resolve => {
      resolve()
      props.updateProject(newData)
    })
  }

  const deleteData = oldData => {
    return new Promise(resolve => {
      resolve()
      props.deleteProject(oldData)
    })
  }

  const createCustomerData = (newCustomerId, indexCustomerId) => {
    return new Promise(resolve => {
      resolve()
      props.createCustomerId(newCustomerId, indexCustomerId, handleCloseModal)
    })
  }

  if (!isLoaded(props.admin_account) && !isLoaded(props.customer_project)) {
    return (
      <SkeletonTheme color="#c9c9c9" highlightColor="#e8e8e8">
        <div style={{ fontSize: 20, lineHeight: 2 }}>
          <Skeleton height={'100%'} />
        </div>
      </SkeletonTheme>
    )
  }

  return (
    <Fragment>
      {isEmpty(props.admin_account) && isEmpty(props.customer_project) ? 'Data is empty': 
        <Fragment>
          <DataTable 
            isLoaded={!isLoaded}
            selectRow={selectRow}
            setSelectRow={setSelectRow}
            createData={createData}
            updateData={updateData}
            deleteData={deleteData}
            handleOpenModal={handleOpenModal}
            photoURL={props.photoURL}
            admin_account={props.admin_account}
            customer_project={props.customer_project}
          />
          <DialogModalCustomerId 
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            createCustomerData={createCustomerData}
            customerId={props.admin_account.customerId}
          />
        </Fragment>
      }
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    HeaderTitle: title => dispatch(HeaderTitle(title)),
    createProject: project => dispatch(createProject(project)),
    deleteProject: project => dispatch(deleteProject(project)),
    updateProject: project => dispatch(updateProject(project)),
    createCustomerId: (projectName, index, callback) => dispatch(createCustomerId(projectName, index, callback))
  }
}

const mapStateToProps = ({firestore, firebase}) => {
  return {
    admin_account: firestore.data.admin_account,
    customer_project: firestore.ordered.customer_project,
    photoURL: firebase.photoURL
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    'admin_account',
    'customer_project'
  ]),
)(AdminAccount)