import React, {useState} from 'react'
import MaterialTable from 'material-table'

const CustomerData = (props) => {
    /* States Setting */
    const [state, setState] = useState({
        columns: [
            { 
                title: 'id', 
                field: 'di',
                type: 'numeric',
                defaultSort: 'asc',
                editable: 'never'
            },
            { 
                title: 'status', 
                field: 'status' 
            },
            { 
                title: 'first_name', 
                field: 'first_name', 
            },
            { 
                title: 'last_name', 
                field: 'last_name', 
            },
            { 
                title: 'email', 
                field: 'email', 
            },
            { 
                title: 'company', 
                field: 'company', 
            },
            { 
                title: 'contact_type', 
                field: 'contact_type', 
            },
            { 
                title: 'detail', 
                field: 'detail', 
            },
            { 
                title: 'tel', 
                field: 'tel', 
            },
            {
                title: 'date_created',
                field: 'date_created',
                type: 'date',
                editable: 'never'
            },
            {
                title: 'website',
                field: 'website',
            },
            {
                title: 'customer_business',
                field: 'customer_business',
                lookup: { 
                    1: 'Pharmaceutical',
                    2: 'Trading',
                    3: 'System Integration',
                    4: 'Financial and insurance',
                    5: 'Funiture',
                    6: 'Restaurant',
                    7: 'Fashion Jewelry Manufacturer',
                    8: 'Beauty'
                },
            }

        ],
        data: [],
    })
    /* Functions Setting */
    const readData = async () => {
    
    }

    const createData = newData => {
        return new Promise(resolve => {
            setTimeout( async () => {
                resolve()
                console.log(newData)
            }, 600)
        })
    }

    const updateData = (newData, oldData) => {
        return new Promise(resolve => {
            setTimeout(async () => {
                resolve()
                console.log(newData, oldData)
            }, 600)
        })
    }

    const deleteData = oldData => {
        return new Promise(resolve => {
            setTimeout(async () => {
                resolve()
                console.log(oldData)
            }, 600)
        })
    }
    return (
        <MaterialTable
            title='Customers Data'
            columns={state.columns}
            data={state.data}
            isLoading={true}
            editable={{
                onRowAdd: (newData) => createData(newData),
                onRowUpdate: (newData, oldData) => updateData(newData, oldData),
                onRowDelete: (oldData) => deleteData(oldData)
            }}
        />
    )
}

export default CustomerData