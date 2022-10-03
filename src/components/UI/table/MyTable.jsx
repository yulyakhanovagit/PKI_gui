import React from 'react';
import classes from './MyTable.module.css'


function MyTable({columns, data}) {
    const col = columns;
    const row = data;
    return (
        <table>
            <thead>
            <tr>
                {col.map(item =>
                <th>{item.name}</th>
                )}
            </tr>
            </thead>
            <tbody>
                {row.map(item =>
                    <tr>
                        <td>{item.id}</td>
                        {item.col_1 && <td>{item.col_1}</td>}
                        {item.col_2 && <td>{item.col_2}</td>}
                        {item.col_3 && <td>{item.col_3}</td>}
                        {item.col_4 && <td>{item.col_4}</td>}
                        {item.col_5 && <td>{item.col_5}</td>}
                        {item.col_6 && <td>{item.col_6}</td>}
                    </tr>
                )}
            </tbody>
        </table>
    );
};
export default MyTable;