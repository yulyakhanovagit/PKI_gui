import React, {useState} from 'react';
import Menu from "./Menu/Menu";

const Layout = ({content}) => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: "Главная", href: '/main'},
        {value: "Датчики электропитания", href: '/power_supply_sensors'},
        {value: "Дискретные входы", href: '/digital_inputs'},
        {value: "Журнал событий", href: '/event_log'},
        {value: "Графические данные", href: '/graphic'},
        {value: "Настройки", dropdown: true},
        {value: "Сервис", href: '/service'}
    ]
    return (
        <div>
        <nav>
            <img src={require("./burger.png")} alt="Burger" height="20px" width="30px" onClick={()=> setMenuActive(!menuActive)} className="burger"/>
            <img src={require("./logo.ico")} alt="Logo" height="30px" className="logo"/>
        </nav>
            <main>

                <Menu active={menuActive} setActive={setMenuActive} items={items}/>
                <content>
                    {content}
                </content>
            </main>
        </div>
    );
};

export default Layout;