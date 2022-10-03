import React, {useState} from 'react';
import '../styles/Menu.css'
import DropdownMenu from "./DropdownMenu";
import MyButton from "../components/UI/button/MyButton";


const Menu = ({items, active, setActive}) => {
    const [menuActive, setMenuActive] = useState(false)
    const settings_items = [
        {value: "Сеть", href: '/net'},
        {value: "SNMP", href: '/snmp'},
        {value: "Способ передачи данных", href: '/data'},
        {value: "Дата и время", href: '/datetime'},
        {value: "Безопасность", href: '/safety'},
    ]
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className="menu__content" >
                    <ul>
                        {items.map(item =>
                            <li key={item.value} onClick={()=> !item.dropdown ? null : setMenuActive(!menuActive)} className={(item.dropdown ? 'item__dropdown' : '')}>
                                <a href={item.href}>{item.value}<i className="fa fa-angle-right"></i></a>
                                {item.dropdown &&
                                    <DropdownMenu items={settings_items} active={menuActive} setActive={setMenuActive}/>
                                }
                            </li>
                        )}
                    </ul>
            </div>
        </div>
    );
};

export default Menu;