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
          lookup: {
            1: "Seatfinder",
            2: "Four4house",
            3: "Somjai",
            4: "Phutawan",
            5: "Seatfinder",
            6: "Everyday Import",
            7: "UDirons",
            8: "Draftboard",
            9: "Beeative",
            10: "Maison",
            // 11: "Beeative Test",
            12: "Pattaya Event",
            13: "Pattaya Calendar",
            14: "Seatfinder Pro",
            15: "Seatfinder UK",
            16: "Beeative Support",
            17: "Magento2.co"
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
    ],
    data: [],
}