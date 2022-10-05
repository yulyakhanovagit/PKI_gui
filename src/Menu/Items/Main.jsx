import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import classes from '../itemsCss/Main.css';
import MyTable from "../../components/UI/table/MyTable";
import MyButton from "../../components/UI/button/MyButton";
import {
    columns_1,
    columns_2,
    columns_3,
    columns_4, columns_5,
    data_1,
    data_2,
    data_3,
    data_4, data_5
} from "../../data/PowerSupplySensors";

const Main = () => {
    const items = [
        {value: 'Датчики электропитания', panel: <MyTable columns={columns_1} data={data_1}/>},
        {value: 'Дискретные выходы', panel: <MyTable columns={columns_2} data={data_2}/>},
        {value: 'Цифровые датчики', panel: <MyTable columns={columns_3} data={data_3}/>},
        {value: 'Релейные выходы', panel: <MyTable columns={columns_4} data={data_4}/>},
        {value: 'Рейлейные выходы модулей расширения', panel: <MyTable columns={columns_5} data={data_5}/>},
    ]
    return (
        <Accordion allowMultipleExpanded>
            {items.map(item =>
            <AccordionItem key={item.uuid}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.value}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {item.panel}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            )}
        </Accordion>
    );
};

export default Main;