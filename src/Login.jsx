import React from 'react';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'
import {Link, useLocation} from "react-router-dom";
import {render} from "react-dom";

const Login = () => {
    return (
        <div className="login__page">
            <div className='login__form'>
                <MyInput header="Логин:"/>
                <MyInput header="Пароль:"/>
                <Link to={"/main"} ><MyButton children="Войти"/></Link>
            </div>
        </div>
    );
};

export default Login;