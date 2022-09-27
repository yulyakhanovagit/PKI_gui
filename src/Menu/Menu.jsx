import React, {useState} from 'react';
import './Menu.css'
import DropdownMenu from "../DropdownMenu";

const Menu = ({items, active, setActive}) => {
    const [menuActive, setMenuActive] = useState(false)
    const settings_items = [
        {value: "Главная", href: '/main'},
        {value: "Датчики электропитания", href: '/power_supply_sensors'},
        {value: "Дискретные входы", href: '/digital_inputs'},
        {value: "Журнал событий", href: '/event_log'},
        {value: "Графические данные", href: '/graphic'},
    ]
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className="menu__content" >
                    <ul>
                        {items.map(item =>
                            <li key={item.value}>
                                <a href={item.href}>{item.value}</a>
                                <i className="fa fa-angle-right"></i>
                                {item.dropdown &&
                                    <DropdownMenu items={settings_items}/>
                                }
                            </li>
                        )}
                    </ul>
            </div>
        </div>
    );
};

export default Menu;