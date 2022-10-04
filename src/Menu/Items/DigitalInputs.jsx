import React from 'react';
import MyForm from "../../components/UI/form/MyForm";
import MyTable from "../../components/UI/table/MyTable";
import {columns_2, data_2} from "../../data/PowerSupplySensors";
import EditTable from "../../components/UI/table/EditTable";

const DigitalInputs = () => {
    return (
        <div>
            <MyForm content={<div>
                <EditTable data={data_2} columns={columns_2}/>
            </div>}/>
        </div>
    );
};

export default DigitalInputs;