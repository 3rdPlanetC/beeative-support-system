export function tableOption(
    isLoading, 
    setSelectRow, 
    columns, 
    data, 
    selectRow, 
    createData, 
    updateData,
    deleteData, 
    readData,
    createCustomerProject
    ) {
    return {
        title:'Admin Accounts',
        // parentChildData:(row, rows) => rows.find(a => a.id === row.parent_id),
        isLoading: isLoading,
        localization:{
            body: {
                emptyDataSourceMessage: isLoading ? 'Loading....' : 'No records to display',
                addTooltip: "Add new data",
                deleteTooltip: "Delete this row",
                editTooltip: "Edit this row",
            }
        },
        onRowClick:(ev, selectRow) => setSelectRow(selectRow),
        columns: columns,
        options: {
            headerStyle: {
                backgroundColor: 'rgba(255, 202, 9, 0.9)'
            },
            rowStyle: rowData => ({
                backgroundColor: (selectRow && selectRow.tableData.id === rowData.tableData.id) ? 'rgba(255, 202, 9, 0.175)' : '#FFF'
            }),
            exportButton: true,
            actionsColumnIndex: -1,
            pageSizeOptions: [5, 10, 15, 20],
            search: true,
            filtering: true,
            grouping: true,
            sort: true,
            padding: 'dense',
            // selection: true
        },
        editable:{
            onRowAdd: (newData) => createData(newData),
            onRowUpdate: (newData, oldData) => updateData(newData, oldData),
            onRowDelete: (oldData) => deleteData(oldData)
        },
        data: data,
        actions:[
            {
                icon: 'refresh',
                tooltip: 'Refresh Data',
                isFreeAction: true,
                onClick: () => readData()
            },
            {
                icon: 'post_add',
                tooltip: 'Add New Project',
                isFreeAction: true,
                onClick: () => createCustomerProject()
            },
        ]
    }
}