import React from 'react';
import '../styles/DropdownMenu.css'
import {useLocation} from "react-router-dom";

const DropdownMenu = ({items, active, setActive}) => {
    let location = useLocation();
    return (
        <div className={active ? 'dropdown active' : 'dropdown'}>
            <ul className="ul__dropdown">
                {items.map(item =>
                    <li className="li__dropdown" key={item.value}>
                        <a className={location.pathname === item.href? 'active a__dropdown' : 'a__dropdown'} href={item.href}>{item.value} <i className="fa fa-angle-right"></i></a>

                    </li>
                )}
            </ul>
        </div>
    );
};

export default DropdownMenu;