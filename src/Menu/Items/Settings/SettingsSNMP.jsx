import React from 'react';
import MyForm from "../../../components/UI/form/MyForm";
import MyInput from "../../../components/UI/input/MyInput";

const SettingsSNMP = () => {
    return (
        <div className="main__wrapper">
            <MyForm content={
                <div>
                    <MyInput header='Модификатор на чтение:'/>
                    <MyInput header='Модификатор на запись:'/>
                    <MyInput header='Доверенные IP адреса:'/>
                    <MyInput/>
                    <MyInput/>
                </div>
            }
            />
            <MyForm content={
                <div>
                    <MyInput header='Модификатор на получение трапов:'/>
                    <MyInput header='IP адреса рассылки трапов:'/>
                    <MyInput/>
                    <MyInput/>
                </div>
            }
            />
        </div>
    );
};

export default SettingsSNMP;