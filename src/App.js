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

const MainContent = () => {
  let location = useLocation();
  switch (location.pathname){
      case '/main': return (<Main/>)
      case '/power_supply_sensors': return (<PowerSupplySensors/>)
      case '/digital_inputs': return (<DigitalInputs/>)
      case '/event_log': return (<EventLog/>)
      case '/graphic': return (<Graphic/>)
     /* case '/settings': return (<Settings/>)*/
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
            <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
                <span/>
            </div>
            <div>{items.value}</div>
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
