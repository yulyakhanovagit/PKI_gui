import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({header}) => {
    return (
        <div>
            <h1 className={classes.inputHeader}>{header}</h1>
            <input className={classes.MyInput}/>
        </div>
    );
};

export default MyInput;