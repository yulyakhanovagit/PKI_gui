import React from 'react';
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import classes from './MyForm.module.css'

const MyForm = ({content}) => {
    return (
        <div className={classes.form}>
            <div className={classes.form__body}>
                {content}
            </div>
            <MyButton children="Применить"/>
        </div>
    );
};

export default MyForm;