import React from 'react';
import MyInput from "../input/MyInput";
import './MyTable.module.css'
import classes from '../input/MyInput.module.css'

const EditTable = ({columns, data}) => {
    const col = columns;
    const row = data;
    return (
        <table>
            <thead >
            <tr>
                {col.map(item =>
                    <th className={classes.tInputHeader}>{item.name}</th>
                )}
                <th className={classes.tInputHeader}>Лог.</th>
            </tr>
            </thead>
            <tbody>
            {row.map(item =>
                <tr>
                    <td >{item.id}</td>
                    {item.col_1 && <td >{item.col_1}</td>}
                    {item.col_2 && <td><input className={classes.tInput}/></td>}
                    {item.col_3 && <td><input className={classes.tInput}/></td>}
                    {item.col_4 && <td><input className={classes.tInput}/></td>}
                    {item.col_5 && <td><input className={classes.tInput}/></td>}
                    {item.col_6 && <td><input className={classes.tInput}/></td>}
                    <td><input type="checkbox" className={classes.tCheckBox}/></td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default EditTable;