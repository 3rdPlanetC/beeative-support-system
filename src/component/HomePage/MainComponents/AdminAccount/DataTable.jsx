import React, { useRef } from 'react'
import MaterialTable from 'material-table'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Avatar from './Avatar'

const DataTable = (props) => {
    const tableRef = useRef()
    return (
        <MaterialTable
            tableRef={tableRef}
            title='Admin Accounts'
            isLoading={props.isLoaded}
            localization={{
                body: {
                    emptyDataSourceMessage: props.isLoaded ? 'Loading....' : 'No records to display',
                    addTooltip: "Add new data",
                    deleteTooltip: "Delete this row",
                    editTooltip: "Edit this row",
                },
                toolbar: {
                    addRemoveColumns: "Show Columns"
                }
            }}
            onRowClick={(ev, selectRow) => props.setSelectRow(selectRow)}
            columns={[
                {
                    title: 'note_id',
                    field: 'note_id',
                    type: 'numeric',
                    defaultSort: 'asc',
                    editable: 'never',
                },
                { 
                    title: 'customer_id', 
                    field: 'customer_id',
                    type: 'numeric',
                    defaultSort: 'asc',
                    lookup: {
                        1: "Seatfinder Pro",
                        2: "Four4house",
                        3: "Somjai",
                        4: "Phutawan",
                        5: "Seatfinder",
                        6: "Everyday Import",
                        7: "UDirons",
                        8: "Draftboard",
                        9: "Beeative",
                        10: "Maison",
                        11: "Pattaya Event",
                        12: "Pattaya Calendar",
                        13: "Seatfinder Pro",
                        14: "Seatfinder UK",
                        15: "Beeative Support",
                        16: "Magento2.co"
                    }
                },
                { 
                    title: 'username', 
                    field: 'username' 
                },
                { 
                    title: 'password', 
                    field: 'password', 
                    type: 'string' 
                },
                {
                    title: 'system_type',
                    field: 'system_type',
                    lookup: { 
                        1: 'FTP/SFTP',
                        2: 'DATABASE',
                        3: 'MAGENTO',
                        4: 'WORDPRESS',
                        5: 'SSH',
                        6: 'DOMAIN',
                        7: 'G-SUIT',
                        8: 'SMTP',
                        9: 'EMAIL-CUSTOMER'
                    },
                },
                {
                    title: 'date_created',
                    field: 'date_created',
                    type: 'date',
                    editable: 'never'
                },
                {
                    title: 'date_modified',
                    field: 'date_modified',
                    type: 'date',
                    editable: 'never'
                },
                {
                    title: 'remark',
                    field: 'remark',
                },
                {
                    title: 'avatar_created',
                    field: 'avatar_created',
                    render: rowData => <Avatar rowData={rowData} photoURL={props.userData.photoURL} type="avatar_created" />,
                    editable: 'never',
                    filtering: false,
                    export: false
                },
                {
                    title: 'avatar_modified',
                    field: 'avatar_modified',
                    render: rowData => <Avatar rowData={rowData} photoURL={props.userData.photoURL} type="avatar_modified" />,
                    editable: 'never',
                    filtering: false,
                    export: false
                },
            ]}
            options= {{
                headerStyle: {
                    backgroundColor: 'rgba(255, 202, 9, 0.9)'
                },
                rowStyle: rowData => ({
                    backgroundColor: (props.selectRow && props.selectRow.tableData.id === rowData.tableData.id) ? 'rgba(255, 202, 9, 0.175)' : '#FFF'
                }),
                exportButton: true,
                actionsColumnIndex: -1,
                pageSizeOptions: [5, 10, 15, 20],
                columnsButton: true,
                search: true,
                searchFieldAlignment: 'left',
                filtering: true,
                grouping: true,
                sort: true,
                padding: 'dense',
            }}
            editable={{
                onRowAdd: (newData) => props.createData(newData),
                onRowUpdate: (newData, oldData) => props.updateData(newData, oldData),
                onRowDelete: (oldData) => props.deleteData(oldData)
            }}
            data={props.customer_project}
            actions={[
                {
                    icon: 'post_add',
                    tooltip: 'Add New Customer Project',
                    isFreeAction: true,
                    onClick: () => props.createCustomerProject()
                },
                // {
                //     icon: 'refresh',
                //     tooltip: 'Refresh Data',
                //     isFreeAction: true,
                //     onClick: () => tableRef.current && tableRef.current.onQueryChange()
                // },
            ]}
        />
    )
}

const mapStateToProps = ({firestore}) => {
    return {
      customer_project: firestore.ordered.customer_project,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    'customer_project',
  ])
)(DataTable)