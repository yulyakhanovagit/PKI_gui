import React from 'react';
import DataTable from 'react-data-table-component';
import classes from './MyTable.module.css'

function MyTable({columns, data}) {
    return (
        <DataTable
            style={classes}
            columns={columns}
            data={data}
        />
    );
};
export default MyTable;