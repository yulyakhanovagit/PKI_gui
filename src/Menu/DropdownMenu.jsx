import React from 'react';
import '../styles/DropdownMenu.css'
import {Link, useLocation} from "react-router-dom";

const DropdownMenu = ({items, active, setActive}) => {
    let location = useLocation();
    return (
        <div className={active ? 'dropdown active' : 'dropdown'}>
            <ul className="ul__dropdown">
                {items.map(item =>
                    <li className="li__dropdown" key={item.value}>
                        <Link to={item.href} className={location.pathname === item.href? 'active a__dropdown' : 'a__dropdown'}>{item.value} <i className="fa fa-angle-right"></i></Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default DropdownMenu;