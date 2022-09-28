import React from 'react';
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import classes from './MyForm.module.css'

const MyForm = () => {
    return (
        <div className={classes.form}>
            <div className={classes.form__body}>
                <MyInput header='alsalslka'/>
                <MyInput/>
                <MyInput/>
                <MyInput/>
                <MyInput/>
            </div>
            <MyButton children="Применить"/>
        </div>
    );
};

export default MyForm;