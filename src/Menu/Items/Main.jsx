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

const Main = ({items, header}) => {

    return (
        <div>
        <div className="header">{header}</div>
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
        </div>
    );
};

export default Main;