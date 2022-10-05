import React from 'react';
import MyForm from "../../components/UI/form/MyForm";
import EditTable from "../../components/UI/table/EditTable";

const PowerSupplySensors = ({columns, data}) => {

    return (
            <MyForm content={<div className='table__container'>
                <EditTable data={data} columns={columns}/>
            </div>}/>
    );
};

export default PowerSupplySensors;