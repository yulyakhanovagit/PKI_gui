import React from 'react';
import '../styles/DropdownMenu.css'

const DropdownMenu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'dropdown active' : 'dropdown'}>
            <ul className="ul__dropdown">
                {items.map(item =>
                    <li className="li__dropdown" key={item.value}>
                        <a className="a__dropdown" href={item.href}>{item.value} <i className="fa fa-angle-right"></i></a>

                    </li>
                )}
            </ul>
        </div>
    );
};

export default DropdownMenu;