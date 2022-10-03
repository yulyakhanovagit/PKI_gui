import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Menu from "./Menu/Menu";
import {BrowserRouter, Routes, useLocation} from "react-router-dom";
import Main from "./Menu/Items/Main";
import Graphic from "./Menu/Items/Graphic";
import PowerSupplySensors from "./Menu/Items/PowerSupplySensors";
import DigitalInputs from "./Menu/Items/DigitalInputs";
import EventLog from "./Menu/Items/EventLog";
import Service from "./Menu/Items/Service";
import MyTable from "./components/UI/table/MyTable";
import "./data/PowerSupplySensors";
import classes from './styles/App.css'
import SettingsNet from "./Menu/Items/Settings/SettingsNet";
import SettingsSNMP from "./Menu/Items/Settings/SettingsSNMP";
import SettingsData from "./Menu/Items/Settings/SettingsData";
import DateTime from "./Menu/Items/Settings/DateTime";
import Safety from "./Menu/Items/Settings/Safety";
import {
    columns_1,
    columns_2,
    columns_3,
    columns_4,
    columns_5,
    data_1,
    data_2,
    data_3,
    data_4,
    data_5
} from "./data/PowerSupplySensors";

const MainContent = () => {
  let location = useLocation();
    const accordionItems = [
        {value: 'Датчики электропитания', panel: <MyTable columns={columns_1} data={data_1}/>},
        {value: 'Дискретные выходы', panel: <MyTable columns={columns_2} data={data_2}/>},
        {value: 'Цифровые датчики', panel: <MyTable columns={columns_3} data={data_3}/>},
        {value: 'Релейные выходы', panel: <MyTable columns={columns_4} data={data_4}/>},
        {value: 'Рейлейные выходы модулей расширения', panel: <MyTable columns={columns_5} data={data_5}/>},
    ]
  switch (location.pathname){
      case '/': return (<Main items={accordionItems} header='Главная'/>)
      case '/power_supply_sensors': return (<PowerSupplySensors/>)
      case '/digital_inputs': return (<DigitalInputs/>)
      case '/event_log': return (<EventLog/>)
      case '/graphic': return (<Graphic/>)
      case '/service': return (<Service/>)
      case '/net': return (<SettingsNet/>)
      case '/snmp': return (<SettingsSNMP/>)
      case '/data': return (<SettingsData/>)
      case '/datetime': return (<DateTime/>)
      case '/safety': return (<Safety />)
  }
}
const App = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: "Главная", href: '/'},
        {value: "Датчики электропитания", href: '/power_supply_sensors'},
        {value: "Дискретные входы", href: '/digital_inputs'},
        {value: "Журнал событий", href: '/event_log'},
        {value: "Графические данные", href: '/graphic'},
        {value: "Настройки", dropdown: true},
        {value: "Сервис", href: '/service'}
    ]

  return (
    <div className="App">
        <BrowserRouter>
        <nav>
            <img src={require("./burger.png")} alt="Burger" height="20px" width="30px" onClick={()=> setMenuActive(!menuActive)} className="burger"/>
            <img src={require("./logo.ico")} alt="Logo" height="30px" className="logo"/>
        </nav>
        <main >
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            <content>
                <MainContent/>
            </content>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
