import React from 'react';
import MyForm from "../../components/UI/form/MyForm";
import MyInput from "../../components/UI/input/MyInput";
import classes from '../itemsCss/Items.css'
import MyTable from "../../components/UI/table/MyTable";
import { columns_1, data_1} from "../../data/PowerSupplySensors";

const PowerSupplySensors = () => {
    return (
        <div >
            <MyForm content={<div>
                <MyTable data={data_1} columns={columns_1}/>
            </div>}/>
        </div>
    );
};

export default PowerSupplySensors;