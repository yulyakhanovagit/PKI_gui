import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Route, Router, Routes, useLocation} from "react-router-dom";
import "./data/PowerSupplySensors";
import Login from "./Login";
import Layout from "./Layout";
import Main from "./Menu/Items/Main";
import PowerSupplySensors from "./Menu/Items/PowerSupplySensors";
import {
    columns_1,
    columns_2,
    columns_3,
    columns_4,
    columns_5,
    data_1, data_2,
    data_3,
    data_4,
    data_5
} from "./data/PowerSupplySensors";
import DigitalInputs from "./Menu/Items/DigitalInputs";
import EventLog from "./Menu/Items/EventLog";
import Graphic from "./Menu/Items/Graphic";
import Service from "./Menu/Items/Service";
import SettingsNet from "./Menu/Items/Settings/SettingsNet";
import SettingsSNMP from "./Menu/Items/Settings/SettingsSNMP";
import SettingsData from "./Menu/Items/Settings/SettingsData";
import DateTime from "./Menu/Items/Settings/DateTime";
import Safety from "./Menu/Items/Settings/Safety";

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Login/>} />
                <Route  path="/mainPage" element={<Layout/>}></Route>
                <Route  path="/main" element={<Layout content={<Main  header='Главная'/>}/>} />
                <Route  path="power_supply_sensors" element={<Layout content={<PowerSupplySensors columns={columns_1} data={data_1}/>}/>} />
                <Route  path="digital_inputs" element={<Layout content={<DigitalInputs/>}/>} />
                <Route  path="event_log" element={<Layout content={<EventLog/>}/>} />
                <Route  path="graphic" element={<Layout content={<Graphic/>}/>} />
                <Route  path="service" element={<Layout content={<Service/>}/>} />
                <Route  path="net" element={<Layout content={<SettingsNet/>}/>} />
                <Route  path="snmp" element={<Layout content={<SettingsSNMP/>}/>} />
                <Route  path="data" element={<Layout content={<SettingsData/>}/>} />
                <Route  path="datetime" element={<Layout content={<DateTime/>}/>} />
                <Route  path="safety" element={<Layout content={<Safety />}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
