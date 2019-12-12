import React, { useState, useEffect, Fragment } from 'react'
import DataTable from './AdminAccount/DataTable'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { HeaderTitle } from '../../../store/actions/titleAction'
import { createProject } from '../../../store/actions/ProjectAction'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


const AdminAccount = (props) => {
  /* States Setting */
  const [selectRow, setSelectRow] = useState(null)
  useEffect(() => {
    const abortController = new AbortController()
    if (props.match.url === "/admin_account") {
      props.HeaderTitle("Admin Accounts")
    }
    return () => {
      abortController.abort()
    }
  }, [props.match.url])
  /* Refresh Customer Data */
  const readData = async () => {
    console.log("readData")
  }
  /* Create Customer Data */
  const createData = async newData => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          const adding = {
            id: props.customer_project.length + 1,
            date_created: new Date().toLocaleDateString(),
            date_modified: new Date().toLocaleDateString(),
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
  /* Update Customer Data */
  const updateData = async (newData, oldData) => {
    return new Promise(resolve => {
      resolve()
      console.log("createCustomerProject")
    })
  }
  /* Delete Customer Data */
  const deleteData = async oldData => {
    return new Promise(resolve => {
      resolve()
      console.log("deleteData")
    })
  }
  /* Create Customer Project */
  const createCustomerProject = async () => {
    return new Promise(resolve => {
      resolve()
      console.log("createCustomerProject")
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
        <DataTable 
          isLoaded={!isLoaded}
          selectRow={selectRow}
          setSelectRow={setSelectRow}
          readData={readData}
          createData={createData}
          updateData={updateData}
          deleteData={deleteData}
          createCustomerProject={createCustomerProject}
          userData={props.userData}
          admin_account={props.admin_account}
          customer_project={props.customer_project}
        />
      }
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    HeaderTitle: (title) => dispatch(HeaderTitle(title)),
    createProject: (project) => dispatch(createProject(project))
  }
}

const mapStateToProps = ({firestore}) => {
  return {
    admin_account: firestore.data.admin_account,
    customer_project: firestore.ordered.customer_project,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    'admin_account',
    'customer_project'
  ]),
)(AdminAccount)