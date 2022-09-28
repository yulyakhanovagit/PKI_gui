import React, {useState} from 'react';
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
import {columns, data } from "./data/PowerSupplySensors";

const MainContent = () => {
  let location = useLocation();
    const accordionItems = [
        {value: 'Датчики электропитания', panel: <MyTable columns={columns} data={data}/>},
        {value: 'Дискретные выходы', panel: 'asaa;ka;skcxas;lkxma;lskxa;sola;adx'},
        {value: 'Цифровые датчики', panel: 'asaa;ka;skcxas;lkxma;lskxa;sola;adx'},
        {value: 'Релейные выходы', panel: 'asaa;ka;skcxas;lkxma;lskxa;sola;adx'},
        {value: 'Рейлейные выходы модулей расширения', panel: 'asaa;ka;skcxas;lkxma;lskxa;sola;adx'},
    ]
  switch (location.pathname){
      case '/main': return (<Main items={accordionItems}/>)
      case '/power_supply_sensors': return (<PowerSupplySensors/>)
      case '/digital_inputs': return (<DigitalInputs/>)
      case '/event_log': return (<EventLog/>)
      case '/graphic': return (<Graphic/>)
      case '/service': return (<Service/>)
  }
}
const App = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: "Главная", href: '/main'},
        {value: "Датчики электропитания", href: '/power_supply_sensors'},
        {value: "Дискретные входы", href: '/digital_inputs'},
        {value: "Журнал событий", href: '/event_log'},
        {value: "Графические данные", href: '/graphic'},
        {value: "Настройки", href: '', dropdown: true},
        {value: "Сервис", href: '/service'}
    ]

  return (
    <div className="App">
        <BrowserRouter>
        <nav>
            <img src={require("./burger.png")} alt="Burger" height="20px" width="30px" onClick={()=> setMenuActive(!menuActive)} className="burger"/>
            <img src={require("./logo.ico")} alt="Logo" height="30px" className="logo"/>
        </nav>
        <main>
                <MainContent/>
        </main>
        <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
