import {customer_project, system_type} from '../../../../config/config'

export const tableState = {
    columns: [
        {
          title: 'id',
          field: 'id',
          type: 'numeric',
          editable: 'never'
        },
        { 
          title: 'customer_id', 
          field: 'customer_id',
          type: 'numeric',
          defaultSort: 'asc',
          lookup: customer_project
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
          lookup: system_type,
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
    ],
    data: [],
}