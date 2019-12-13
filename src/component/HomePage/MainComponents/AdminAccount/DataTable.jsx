import React from 'react'
import MaterialTable from 'material-table'
import Avatar from './Avatar'

const DataTable = (props) => {
    return (
        <MaterialTable
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
                    lookup: props.admin_account.customerId
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
                    lookup: props.admin_account.systemType,
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
                    render: rowData => <Avatar rowData={rowData} photoURL={props.photoURL} type="avatar_created" />,
                    editable: 'never',
                    filtering: false,
                    export: false
                },
                {
                    title: 'avatar_modified',
                    field: 'avatar_modified',
                    render: rowData => <Avatar rowData={rowData} photoURL={props.photoURL} type="avatar_modified" />,
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
                    onClick: () => props.handleOpenModal()
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

export default DataTable