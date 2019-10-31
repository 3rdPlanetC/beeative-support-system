export function tableOption(a, b, c, d, e, h, i ,j, l) {
    return {
        title:'Admin Accounts',
        // parentChildData:(row, rows) => rows.find(a => a.id === row.parent_id),
        isLoading: a,
        localization:{
            body: {
                emptyDataSourceMessage: a ? 'Loading....' : 'No records to display',
                addTooltip: "Add new data",
                deleteTooltip: "Delete this row",
                editTooltip: "Edit this row",
            }
        },
        onRowClick:(ev, selectRow) => b(selectRow),
        columns: c,
        options: {
            headerStyle: {
                backgroundColor: 'rgba(255, 202, 9, 0.9)'
            },
            rowStyle: rowData => ({
                backgroundColor: (e && e.tableData.id === rowData.tableData.id) ? 'rgba(255, 202, 9, 0.175)' : '#FFF'
            }),
            exportButton: true,
            actionsColumnIndex: -1,
            pageSizeOptions: [5, 10, 15, 20],
            search: true,
            filtering: true,
            grouping: true,
            sort: true
            // selection: true
        },
        editable:{
            onRowAdd: (newData) => h(newData),
            onRowUpdate: (newData, oldData) => i(newData, oldData),
            onRowDelete: (oldData) => j(oldData)
        },
        data: d,
        actions:[
            {
                icon: 'refresh',
                tooltip: 'Refresh Data',
                isFreeAction: true,
                onClick: () => l()
            },
        ]
    }
}